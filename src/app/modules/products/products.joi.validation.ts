const Joi = require("joi");

// Variant Schema
const variantSchema = Joi.object({
    type: Joi.string().required(),
    value: Joi.string().required(),
});

// Inventory Schema
const inventorySchema = Joi.object({
    quantity: Joi.number().required(),
    inStock: Joi.boolean().required(),
});

// Product Schema
const productValidationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    variants: Joi.array().items(variantSchema).required(),
    inventory: inventorySchema.required(),
});

export default productValidationSchema;
