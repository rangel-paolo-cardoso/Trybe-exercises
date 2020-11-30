'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Books', [
      {
        title: 'Clean Code',
        author: 'Rangel Paolo',
        pageQuantity: 200,
      },
      {
        title: 'Java na Prática',
        author: 'Rangel Paolo',
        pageQuantity: 1000,
      },
      {
        title: 'Linguagem C',
        author: 'Rangel Paolo',
        pageQuantity: 300,
      },
    ]),

  down: async (queryInterface, Sequelize) => 
};
