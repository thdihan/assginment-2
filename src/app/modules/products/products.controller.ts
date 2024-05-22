import { Request, Response } from "express";
import { ProductsService } from "./products.services";
import { Error } from "mongoose";

const createProduct = async (req: Request, res: Response) => {
    try {
        const { product: Product } = req.body;
        const result = await ProductsService.createProductIntoDb(Product);

        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const ProductsController = {
    createProduct,
};
