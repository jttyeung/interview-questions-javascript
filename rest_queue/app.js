let express = require('express'),
  app = express(),
  db = require('./db'),
  UrlController = require('./UrlController');

app.use('/urls', UrlController);

module.exports = app;
