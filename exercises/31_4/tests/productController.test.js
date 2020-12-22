const controllers = require('../controllers/productController');
const ProductModel = require('../models/productModel');

describe('Product Controller', () => {
  describe('Testa função getAllProducts', () => {
    test('Verifica se retorna todos os dados', () => {
      const expectedReturn = [
        { id: 1, name: 'Cerveja Skol', brand: 'Ambev' },
        { id: 2, name: 'Monitor AGON', brand: 'AOC' },
        { id: 3, name: 'MacBook Air', brand: 'Apple' },
      ];

      const getAllSpy = jest
        .spyOn(ProductModel, 'getAll')
        .mockReturnValueOnce(expectedReturn);
      
      const mockReq = {};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controllers.getAllProducts(mockReq, mockRes);
      expect(getAllSpy).toBeCalledTimes(1);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith(expectedReturn);
      getAllSpy.mockRestore();
    });
  });
});
