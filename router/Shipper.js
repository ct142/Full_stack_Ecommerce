// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const express = require("express");
const {
  register,
  Login,
  getHome,
  Logout,
  getAll,
  getbyId,
  updateProfile,
  updateStatus,
  changePassword,
} = require("../controller/ShipperController");
const router = express.Router();
const Shipper = require("../model/Shipper");
const store = require("../middlerware/multer");
const DistributionHub = require("../model/DistributionHub");
const { checkShipper, checkAuth } = require("../middlerware/AuthMiddlerware");

router.get("/register", async (req, res) => {
  const data = await DistributionHub.find({}).lean();

  if (req.session.user) {
    return res.redirect("/");
  }
  res.render("register_shipper", { data });
});
router.post("/register", store.single("profilePicture"), register);


router.get("/:id", async (req, res) => {
  try {
    const shipper = await Shipper.findById(req.params.id).lean();
    if (!shipper) {
      return res.status(404).json({ message: "Shipper not found" });
    }
    res.render("shipper_info", { shipper });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/logout", Logout);

router.get("/getall/order", checkAuth, checkShipper, getAll);
router.post("/change_profile", store.single("profilePicture"), updateProfile);
router.post("/api/updateStatus", updateStatus);

router.get("/getDetail/:id", checkAuth, checkShipper, getbyId);
router.post("/api/updatePassword", checkAuth, checkShipper, changePassword);

module.exports = router;
