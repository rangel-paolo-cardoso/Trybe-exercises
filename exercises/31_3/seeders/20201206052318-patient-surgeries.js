'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('Patient_surgeries', [
      {
        patient_id: 3,
        surgery_id: 1,
      },
      {
        patient_id: 3,
        surgery_id: 6,
      },
      {
        patient_id: 4,
        surgery_id: 5,
      },
      {
        patient_id: 1,
        surgery_id: 1,
      },
      {
        patient_id: 3,
        surgery_id: 2,
      },
      {
        patient_id: 4,
        surgery_id: 7,
      },
      {
        patient_id: 1,
        surgery_id: 2,
      },
      {
        patient_id: 1,
        surgery_id: 3,
      },
    ], {}),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('Patient_surgeries', null, {}),
};
