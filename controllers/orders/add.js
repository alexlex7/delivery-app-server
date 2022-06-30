const { Order } = require('../../models');

const add = async (req, res) => {
  console.log(req);
  const result = await Order.create(req.body);

  res.status(201).json(result);
};

module.exports = add;
