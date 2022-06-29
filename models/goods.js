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
});

const Good = model('good', goodSchema);

module.exports = { Good };
