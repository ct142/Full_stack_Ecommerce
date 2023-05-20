// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const express = require("express");
const { getDetailsProduct, checkOut, findByProduct, listAll, getDetailsProductApi } = require("../controller/ProductController");
const { checkAuth, checkAuthAPI } = require("../middlerware/AuthMiddlerware");
const router = express.Router();

router.get("/orders",checkOut)
router.get("/:id",getDetailsProduct)
router.get('/v1/search',findByProduct)
router.get("/getAll/product",listAll)
router.get("/getDetailsProductApi/:id",getDetailsProductApi)
module.exports = router