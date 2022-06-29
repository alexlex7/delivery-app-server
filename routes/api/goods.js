const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrl = require('../../controllers/goods');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

module.exports = router;
