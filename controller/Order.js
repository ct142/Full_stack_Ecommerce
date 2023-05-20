// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
//Assessment: Assignment 2
//Author: Vo Chau Thang - s3927178, Nguyen Ngoc Kim - s3970589, 
//        Nguyen Huu Quoc Huy - s3986423, Lam Uy Vu - s3938804, Lee Jae Sung - s3977739
//Acknowledgement: Acknowledge the resources that you use here. 

const Order = require("../model/Orders")


const createOrder = async (req, res) => {
    const { cart, distributionHub, address, iduser, name, nameHub } = req.body;

    try {
        const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

        let totalQuantity = 0;
        cart.forEach(item => {
            totalQuantity += item.quantity;
        });
        const order = await Order.create({
            cart,
            distributionHub,
            total,
            addressShip: address,
            idUser: iduser,
            nameUser: name,
            amount: totalQuantity,
            nameHub
        });

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const deleteCart = async (req, res, next) => {
    try {
        const data = await Order.updateOne(
            { _id: (req.body.orderId) },
            {
                $pull: { cart: { id: (req.body.productId) } },
                $inc: { total: -req.body.price * req.body.quantity, amount: -req.body.quantity },
            }
        )
        if (data) {
            return res.json({ status: 1 })
        }
        else {
            return res.json({ status: 0 })

        }
    } catch (error) {
        next(error)
    }
}



module.exports = { createOrder, deleteCart }