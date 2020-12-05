'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Patients', {
      patient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      plan_id: {
        onDelete: 'CASCADE',
        references: {
          model: 'Plans',
          key: 'plan_id',
        },
        type: Sequelize.INTEGER,
      },
    }),

  down: async (queryInterface) =>
    queryInterface.dropTable('Patients'),
};
