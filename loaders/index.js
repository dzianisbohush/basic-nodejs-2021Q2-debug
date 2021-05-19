const expressLoader = require('./express');
const { sequelizeLoader } = require('./sequelize');

const loadersInit = async ({ expressApp }) => {
  await sequelizeLoader()

  await expressLoader({ app: expressApp });
};

module.exports = loadersInit;
