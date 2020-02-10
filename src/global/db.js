const mysql = require('mysql');
var Config = require('./config');

const db = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'zero'
});

const connect = function () {
  // connect to database
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to database');
  });
  global.db = db;
};

module.exports = {
  connect
};