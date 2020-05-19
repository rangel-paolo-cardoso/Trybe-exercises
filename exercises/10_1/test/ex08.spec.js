const thereIs = require('../src/ex08');

describe('É função?', () => {
  test('Verifica se é uma função', () => {
    expect(typeof thereIs).toBe('function');
  });
});