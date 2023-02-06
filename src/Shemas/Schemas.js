const Joi = require("Joi");

const ProductsSchema = Joi.object({
  category: Joi.string().require(),
  name: Joi.string().require(),
  color: Joi.string().require(),
  price: Joi.number().min(0.01).require()
});
