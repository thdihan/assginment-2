import { OrderModel } from "./orders.model";
import { Order } from "./orders.interface";
import { ProductModel } from "../products/products.model";

const createOrderIntoDb = async (order: Order) => {
    const product = (await ProductModel.findById(order.productId)) || null;

    if (product) {
        if (product.inventory.quantity < order.quantity)
            throw new Error("Insufficient quantity available in inventory");
        else {
            const result = await OrderModel.create(order);

            // Reducing the quantity of the product in the Product collection
            product.inventory.quantity =
                product.inventory.quantity - order.quantity;
            product.inventory.inStock = product.inventory.quantity > 0;
            await ProductModel.findByIdAndUpdate(order.productId, {
                inventory: product.inventory,
            });

            return result;
        }
    } else {
        throw new Error("Product not found");
    }
};

const getAllOrdersFromDb = async () => {
    const result = await OrderModel.find();
    if (!result) throw new Error("No orders found");
    return result;
};

const getOrderByEmail = async (email: string) => {
    const result = await OrderModel.find({ email: email });
    if (result) throw new Error("No orders found for the given email");
    return result;
};

export const OrdersService = {
    createOrderIntoDb,
    getAllOrdersFromDb,
    getOrderByEmail,
};
