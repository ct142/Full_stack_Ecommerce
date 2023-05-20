// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const vendorSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
     
    },
    password: {
      type: String,
      required: true,
      
    },
    filename: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
    imageBase64: {
      type: String,
      required: true,
    },
    business_name: {
      type: String,
      required: true,
      minlength: 5,
    },
    business_address: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  {
    timestamps: true,
  }
);

// Login
vendorSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

// Register
vendorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
