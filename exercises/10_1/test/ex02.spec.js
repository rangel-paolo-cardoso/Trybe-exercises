const myIndexOf = require('../src/ex02');

describe('Verifica se item existe em Array', () => {
  test('Verifica se 3 existe', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
});