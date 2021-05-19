const Sequelize = require('sequelize');
const { DB, DB_USER, DB_PASSWORD, DB_HOST} = require('../common/config');

const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
})

const sequelizeLoader = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');

    await sequelize.sync()

    return sequelize
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
}

module.exports = {
  db: sequelize,
  sequelizeLoader
}
