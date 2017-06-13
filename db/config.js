const Sequelize = require('Sequelize');
const db = new Sequelize('bucket', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
  .then(() => {
      console.log('Database Connection Succesful');
  }).catch((err) => {
      console.log('error: ', err);
  })


module.exports = db;