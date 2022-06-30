const { Schema, model } = require('mongoose');

const goodSchema = Schema({
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
});

const Good = model('good', goodSchema);

module.exports = { Good };
