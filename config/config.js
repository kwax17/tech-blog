const Sequelize = require('sequelize');
require('dotenv').config();

// connect to database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      dialect: 'mysql',
    });

module.exports = sequelize;
