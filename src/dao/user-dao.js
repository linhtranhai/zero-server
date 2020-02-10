const getUser = function () {
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
  getUser
};