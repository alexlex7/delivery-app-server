const { Shop } = require('../../models');

const getAll = async (req, res) => {
  const shops = await Shop.find({});
  res.json({ shops });
};

module.exports = getAll;
