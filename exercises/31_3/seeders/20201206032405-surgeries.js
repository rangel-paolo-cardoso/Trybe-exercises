'use strict';

module.exports = {
  up: async (queryInterface) =>
  queryInterface.bulkInsert('Surgeries', [
    {
      speciality: 'Apendicectomia',
      doctor: 'Rey Dos Santos',
    },
    {
      speciality: 'Cistectomia',
      doctor: 'Marcos Afonso',
    },
    {
      speciality: 'Colecistectomia',
      doctor: 'Iuri Solto',
    },
    {
      speciality: 'Craniectomia',
      doctor: 'Marilene Tobias',
    },
    {
      speciality: 'Gastrorrafia',
      doctor: 'Joana Machado',
    },
    {
      speciality: 'Herniorrafia',
      doctor: 'Lincoln Mathias',
    },
    {
      speciality: 'Hisperopexia',
      doctor: 'Alessandra Martins',
    },
    {
      speciality: 'Cistoscopia',
      doctor: 'Adailton Rodrigues',
    },
  ], {}),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('Surgeries', null, {}),
};
