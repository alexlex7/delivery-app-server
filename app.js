const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const shopsRouter = require('./routes/api/shops');
const goodsRouter = require('./routes/api/goods');
require('dotenv').config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/shops', shopsRouter);
app.use('/api/goods', goodsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status).json({ message });
});

module.exports = app;
