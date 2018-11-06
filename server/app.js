const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const stringRoutes = require('./routes');
const morgan = require('morgan');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('tiny'));

app.use('/strings', stringRoutes);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({ message: err.message });
});

module.exports = app;
