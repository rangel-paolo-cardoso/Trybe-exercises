'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Surgeries', {
      surgery_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      speciality: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      doctor: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    }),

  down: async (queryInterface) =>
  queryInterface.drioTable('Surgeries'),
};
