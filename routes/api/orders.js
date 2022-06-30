const express = require('express');
const { ctrlWrapper } = require('../../helpers');
const ctrl = require('../../controllers/orders');
const { schemas } = require('../../models');
const { validation } = require('../../middlewares');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));
router.post('/', validation(schemas.addOrder), ctrlWrapper(ctrl.add));

module.exports = router;
