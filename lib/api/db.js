'use strict';

require('dotenv').config();

var thinky = require('thinky')({
  host: process.env.HOST,
  port: process.env.PORT,
  db: process.env.DB
});

module.exports = thinky;