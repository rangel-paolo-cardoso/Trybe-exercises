const isAbove = require('../src/ex10');

describe('Ordem numeral', ()=> {
  test('Verifica se um número é maior que outro', () => {
    expect(isAbove(5, 2)).toBe(true);
    expect(isAbove(5, 10)).toBe(false);
  });
});