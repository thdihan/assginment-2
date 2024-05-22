const Joi = require("joi");

const orderSchema = Joi.object({
    email: Joi.string().email().required(),
    productId: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
});

export default orderSchema;
