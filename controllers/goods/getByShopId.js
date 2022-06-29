const { Good } = require('../../models');

const getByShopId = async (req, res) => {
  const { shopId } = req.params;
  const response = await Good.find({ shopId });
  res.json(response);
};

module.exports = getByShopId;
