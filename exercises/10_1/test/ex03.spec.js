const mySum = require('../src/ex03');

describe('Soma números do array', () => {
  test('Verifica se a soma está correta', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
    expect(mySum([1, -2, -3, 4])).toBe(0);
  });
});