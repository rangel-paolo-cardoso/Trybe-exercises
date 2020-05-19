const sum = require('../src/ex01');

describe('Função soma', () => {
  test('Deve somar dois números', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  test('Verifica se da Erro', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4, '5')).toThrow('Parâmetros devem ser números!');
  });
});

