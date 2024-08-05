import Joi from "joi";

const createOrderSchema = Joi.object({
  items: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string(),
        quantity: Joi.number().integer().positive().required(),
        price: Joi.number().positive().required(),
      })
    )
    .required(),
  status: Joi.string().valid("pending", "completed", "cancelled").required(),
  createdAt: Joi.date().iso().required(),
});

export default {
  createOrderSchema,
};
