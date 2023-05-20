// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const express = require("express");
const { register, Login, Logout, updateProfile, getAddress, changePassword } = require("../controller/CustomerController");
const router = express.Router();
const store = require("../middlerware/multer");
const { checkAuth, checkCustomer } = require("../middlerware/AuthMiddlerware");

router.get("/register", (req, res) => {
  if(req.session.user){
    return res.redirect('/')
  }
  res.render("register_customer");
});
router.post("/register", store.single("profilePicture"), register);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/updateProfile",checkAuth,checkCustomer,store.single("profilePicture"),updateProfile);
router.get("/address",checkAuth,getAddress)
router.post("/api/updatePassword", checkAuth, checkCustomer, changePassword);

module.exports = router;
