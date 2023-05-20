// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const express = require("express");
const {createOrder, deleteCart} = require("../controller/Order");
const { checkCustomer, checkAuth, checkAuthAPI } = require("../middlerware/AuthMiddlerware");
const router = express.Router();


router.post("/orders",checkAuthAPI,createOrder)
router.delete("/deleteCart",deleteCart)

module.exports= router