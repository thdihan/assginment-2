import { Request, Response } from "express";
import { OrdersService } from "./orders.services";
import { Order } from "./orders.interface";
import orderValidationSchema from "./orders.joi.validation";

// Creat Single Order
const createOrder = async (req: Request, res: Response) => {
    try {
        const order: Order = req.body;
        const { error } = orderValidationSchema.validate(order);
        console.log("Order : ", order);
        const result = await OrdersService.createOrderIntoDb(order);

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({ suceess: false, message: err.message });
    }
};

const getAllOrder = async (req: Request, res: Response) => {
    const { email } = req.query;

    if (email) {
        // Get order by email.
        try {
            const result = await OrdersService.getOrderByEmail(email as string);

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        } catch (err: any) {
            res.status(500).json({ success: false, message: err.message });
        }
        return;
    } else {
        // Get all orders.
        try {
            const result = await OrdersService.getAllOrdersFromDb();

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        } catch (err: any) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
};

export const OrdersController = {
    createOrder,
    getAllOrder,
};
