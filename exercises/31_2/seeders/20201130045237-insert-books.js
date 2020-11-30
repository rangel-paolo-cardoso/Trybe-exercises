'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Books', [
      {
        title: 'O senhor dos anés',
        author: 'Rangel Paolo',
        pageQuantity: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Clean Code',
        author: 'Rangel Paolo',
        pageQuantity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Java na Prática',
        author: 'Rangel Paolo',
        pageQuantity: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Linguagem C',
        author: 'Rangel Paolo',
        pageQuantity: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
