// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const jwt = require("jsonwebtoken");

const generateToken = async (id) => {
  return jwt.sign({ ...id }, process.env.JWT_SECRET, {
    expiresIn: "365d",
  });
};
const refreshToken = async (id) => {
  return jwt.sign({ ...id }, process.env.REFRESH_TOKEN_SECRET);
};
module.exports = { generateToken, refreshToken };