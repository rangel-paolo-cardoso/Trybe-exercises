const sum = require('../src/ex01');

describe('Função soma', () => {
  test('Deve somar dois números', () => {
    expect(sum(4, 5)).toBe(9);
  });
});

