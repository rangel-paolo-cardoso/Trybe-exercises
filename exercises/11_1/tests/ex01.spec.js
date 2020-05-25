const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe('Teste de Callback', () => {
  test('Verifica se o retorna é em UpperCase', () => {
    uppercase('Rangel', (arg) => {
      expect(arg).toBe('RANGEL');
      // done();
    });
  });
});