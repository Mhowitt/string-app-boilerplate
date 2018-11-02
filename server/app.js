const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const stringRoutes = require('./routes');
const morgan = require('morgan');
const cors = require('CORS');
const PORT = 5000;

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
