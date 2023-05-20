// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const DistributionHub = require("../model/DistributionHub")
const Joi = require("joi");


const createDistribution = async (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required()
    })

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
        });
    }
    try {
        const { name, address } = req.body;
        const checkName = await DistributionHub.findOne({ name })
        if (checkName) {
            return res.status(400).json({ message: "Name is already taken" });
        }
        const checkAddress = await DistributionHub.findOne({ address })
        if (checkAddress) {
            return res.status(400).json({ message: "Address is already taken" });
        }
        const newDistribution = new DistributionHub({
            name,
            address
        });
        await newDistribution.save();

        return res.status(200).json({ message: "Success", newDistribution })
    } catch (error) {
        next(error)
    }
}

const getRandom = async (req, res, next) => {
    try {
        const data = await DistributionHub.aggregate([{ $sample: { size: 1 } }])
        return res.json(data)
    } catch (error) {
        next(error)
    }
}
module.exports = { createDistribution,getRandom }