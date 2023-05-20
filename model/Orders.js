// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cart: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                require: true,
            },
            price: {
                type: Number,
                require: true,
            },
            name: {
                type: String,
                require: true,
            },
            quantity: {
                type: Number,
                require: true,
            },
        }
    ],
    total: {
        type: Number,
        require: true,
    },
    distributionHub: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DistributionHub",
        required: true
    },
    addressShip: {
        type: String,
        require: true
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    nameUser: {
        type: String,
        require: true
    },
    nameHub: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        default: 'Pending'
    }

},
    {
        timestamps: true,
    }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
