'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Patient_surgeries', {
      patient_id: {
        primaryKey: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Patients',
          key: 'patient_id',
        },
        type: Sequelize.INTEGER,
      },
      surgery_id: {
        primaryKey: true,
        onDelete: 'CASCADE',
        references: {
          model: 'Surgeries',
          key: 'surgery_id',
        },
        type: Sequelize.INTEGER,
      },
    }),

  down: async (queryInterface) =>
    queryInterface.createTable('Patient_surgeries'),
};
