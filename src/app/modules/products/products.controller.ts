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

const getSpecificProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductsService.getSpecificProductFromDb(id);

        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

const updateSpecificProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const product: Product = req.body;
        const { error } = productValidationSchema.validate(product);
        const result = await ProductsService.updateSpecificProductInDb(
            id,
            product
        );

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

const deleteSpecificProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductsService.deleteSpecificProductFromDb(id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const ProductsController = {
    createProduct,
    getAllProducts,
    getSpecificProduct,
    updateSpecificProduct,
    deleteSpecificProduct,
};
