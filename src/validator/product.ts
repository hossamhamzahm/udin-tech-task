import Joi from "joi";

const ProductSchema = 
Joi.object({
    product: Joi.object({
        name: Joi.string().required(),
        category: Joi.string().valid('food', 'cloths', 'electronics', 'other').required(),
        unit_price: Joi.number().required(),
        quantity: Joi.number().required()
    }).required()
});

export default ProductSchema;