import { ProductModel } from "./products.model";
import { Product } from "./products.interface";

const createProductIntoDb = async (product: Product) => {
    const result = await ProductModel.create(product);
    if (!result) throw new Error("Product not created");
    return result;
};

const getAllProductsFromDb = async () => {
    const result = await ProductModel.find();
    if (!result) throw new Error("No products found");
    return result;
};

const getSpecificProductFromDb = async (id: string) => {
    const result = await ProductModel.findById(id);
    if (!result) throw new Error("Product not found");
    return result;
};

const updateSpecificProductInDb = async (id: string, product: Product) => {
    const result = await ProductModel.findByIdAndUpdate(id, product, {
        new: true,
    });
    if (!result) throw new Error("Product not updated");
    return result;
};

const deleteSpecificProductFromDb = async (id: string) => {
    const result = await ProductModel.findByIdAndDelete(id, { new: true });
    if (!result) throw new Error("Product not deleted");
    return null;
};

const searchByquery = async (searchTerm: string) => {
    const result = await ProductModel.find({
        $or: [
            { name: { $regex: searchTerm, $options: "i" } },
            { description: { $regex: searchTerm, $options: "i" } },
            { tags: { $regex: searchTerm, $options: "i" } },
        ],
    });
    if (!result) throw new Error("No products found");
    return result;
};

export const ProductsService = {
    createProductIntoDb,
    getAllProductsFromDb,
    getSpecificProductFromDb,
    updateSpecificProductInDb,
    deleteSpecificProductFromDb,
    searchByquery,
};
