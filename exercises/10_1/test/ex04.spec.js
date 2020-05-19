const myRemove = require('../src/ex04');
const arr = [1, 2, 3, 4]
describe('Retorna array sem o item escolhido', () => {
  test('Verifica se remove um item', () => {
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
    expect(arr).toEqual([1, 2, 3, 4]);
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});