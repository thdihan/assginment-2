import { ProductModel } from "./products.model";
import { Product } from "./products.interface";

const createProductIntoDb = async (product: Product) => {
    const result = await ProductModel.create(product);
    return result;
};

const getAllProductsFromDb = async () => {
    const result = await ProductModel.find();
    return result;
};

const getSpecificProductFromDb = async (id: string) => {
    const result = await ProductModel.findById(id);
    return result;
};

export const ProductsService = {
    createProductIntoDb,
    getAllProductsFromDb,
    getSpecificProductFromDb,
};
