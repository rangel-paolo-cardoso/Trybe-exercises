const thereIsValue = require('../src/ex07');
const thereIs = thereIsValue();

describe('Verifica se variável está definida', () => {
  test('Testa se não é undefined', () => {
    expect(typeof thereIs).not.toBe(undefined);
  });
});