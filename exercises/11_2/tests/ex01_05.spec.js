// Exercício 5.
const exs5 = require('../exercises/ex01_05');

describe('Mockagem da 1 e reset', () => {
  test('Teste de restauração de implementation', () => {
    const toUp = jest.spyOn(exs5, 'toUpper')
    .mockImplementation(str => str.toLowerCase());

    expect(toUp('Rangel')).toBe('rangel');
    expect(toUp).toHaveBeenCalled();
    expect(toUp).toHaveBeenCalledTimes(1);
    expect(toUp).toHaveBeenCalledWith('Rangel');

    exs5.toUpper.mockRestore();

    expect(exs5.toUpper('Rangel')).toBe('RANGEL');
  });
});