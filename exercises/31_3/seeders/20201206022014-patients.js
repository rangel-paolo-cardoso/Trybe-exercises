'use strict';

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('Patients', [
      {
        full_name: 'Alberto Dos Santos',
        plan_id: 1,
      },
      {
        full_name: 'Maria Silveira Rodrigues',
        plan_id: 3,
      },
      {
        full_name: 'Osvaldo de Andrade',
        plan_id: 3,
      },
      {
        full_name: 'Cristiano Ronaldo Messi',
        plan_id: 2,
      },
      {
        full_name: 'Luis Carlos Suarez',
        plan_id: 3,
      },
    ], {}),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('Patients', null, {}),
};
