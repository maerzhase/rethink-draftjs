'use strict';

var _rethinkdb = require('rethinkdb');

var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

require('../dev/env');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = void 0;

// Create the table Block
var createTableBlock = function createTableBlock() {
  _rethinkdb2.default.db(process.env.DB).tableCreate('Block').run(connection, function (error, result) {
    if (error) console.log(error);
    if (result != null && result.tables_created === 1) {
      console.log('Table `Block` created');
    } else {
      console.log('Error: Table `Block` not created');
    }
  });
};

// Create the table Page
var createTablePage = function createTablePage() {
  _rethinkdb2.default.db(process.env.DB).tableCreate('Page').run(connection, function (error, result) {
    if (error) console.log(error);
    if (result != null && result.tables_created === 1) {
      console.log('Table `Page` created');
    } else {
      console.log('Error: Table `Page` not created');
    }
    createTableBlock();
  });
};

// Create the database
var createDatabase = function createDatabase() {
  _rethinkdb2.default.dbCreate(process.env.DB).run(connection, function (error, result) {
    if (error) console.log(error);
    if (result != null && result.dbs_created === 1) {
      console.log('Database \'' + process.env.DB + '\' created');
    } else {
      console.log('Error: Database \'' + process.env.DB + '\' not created');
    }
    createTablePage();
  });
};

var connect = function connect() {
  _rethinkdb2.default.connect({
    host: process.env.HOST,
    port: process.env.PORT,
    db: process.env.DB
  }, function (error, conn) {
    if (error) throw error;
    connection = conn;
    createDatabase();
  });
};

connect();