const { Good } = require('../../models');

const getAll = async (req, res) => {
  const response = await Good.find({});
  res.json(response);
};

module.exports = getAll;
