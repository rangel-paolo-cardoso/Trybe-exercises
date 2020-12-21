const { getAllProducts } = require('../controllers/productController');

describe('Product Controller', () => {
  describe('Testa função getAllProducts', () => {
    test('Verifica se retorna todos os dados', () => {
      const expectedReturn = [
        { id: 1, name: 'Cerveja Skol', brand: 'Ambev' },
        { id: 2, name: 'Monitor AGON', brand: 'AOC' },
        { id: 3, name: 'MacBook Air', brand: 'Apple' },
      ];

      const response = getAllProducts();
      expect(response).toStrictEqual(expectedReturn);
    });
  });
});
