// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const mongoose = require("mongoose");

const distributionHubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  address: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
},
{
  timestamps: true,
});

const DistributionHub = mongoose.model(
  "DistributionHub",
  distributionHubSchema
);

module.exports = DistributionHub;
