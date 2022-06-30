const { Order } = require('../../models');

const getAll = async (req, res) => {
  const response = await Order.find({});
  res.json(response);
};

module.exports = getAll;
