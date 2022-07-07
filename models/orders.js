const { Schema, model } = require('mongoose');
const Joi = require('joi');

const orderSchema = Schema({
  address: {
    type: String,
    required: true,
  },
  cartItems: {
    type: [
      {
        name: {
          type: String,
        },
        shopId: {
          type: String,
        },
        shopName: {
          type: String,
        },
        price: {
          type: Number,
        },
        qty: {
          type: Number,
        },
        image: {
          type: String,
        },
        _id: {
          type: String,
        },
      },
    ],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const Order = model('order', orderSchema);

const addOrder = Joi.object({
  address: Joi.string().min(10).required(),
  cartItems: Joi.array().items(Joi.object()).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  name: Joi.string().min(3).max(40).required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

const schemas = { addOrder };
module.exports = { Order, schemas };
