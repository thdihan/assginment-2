import { Request, Response } from "express";
import { ProductsService } from "./products.services";
import { Error } from "mongoose";
import { Product } from "./products.interface";
import productValidationSchema from "./products.joi.validation";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product: Product = req.body;
        const { error } = productValidationSchema.validate(product);
        console.log("Product : ", product);
        const result = await ProductsService.createProductIntoDb(product);

        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const result = await ProductsService.getAllProductsFromDb();

        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const ProductsController = {
    createProduct,
    getAllProducts,
};
