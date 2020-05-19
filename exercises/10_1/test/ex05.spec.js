const myRemoveWithoutCopy = require('../src/ex05');

describe('Remove sem copiar', () => {
  const arr = [1, 2, 3, 4];
  test('Testa se o item é removido', () => {
    expect(myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy(arr, 3)).not.toEqual([1, 2, 3, 4]);
    const arr2 = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arr2, 5)).toEqual([1, 2, 3, 4]);
  });
});