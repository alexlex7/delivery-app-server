const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const shopsRouter = require('./routes/api/shops');
const goodsRouter = require('./routes/api/goods');
const ordersRouter = require('./routes/api/orders');
require('dotenv').config();
const path = require('path');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(cors());
app.use(express.json());

app.use('/api/shops', shopsRouter);
app.use('/api/goods', goodsRouter);
app.use('/api/orders', ordersRouter);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status).json({ message });
});

module.exports = app;
