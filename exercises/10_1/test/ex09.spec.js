const obj1 = require('../src/ex09').obj1;
const obj2 = require('../src/ex09').obj2;
const obj3 = require('../src/ex09').obj3;

describe('Diferença entre objeto', () => {
  test('Verifica se são iguais', () => {
    expect(obj1).not.toBe(obj2);
    expect(obj2).not.toBe(obj3);
    expect(obj1).not.toBe(obj3);
  });
});