// Os 3 primeiros exercícios.
const exs = require('../exercises/ex01');

describe('Realizando Mocks', () => {
  test('Teste de chamada de randNum', () => {
    exs.randNum = jest.fn().mockReturnValue(10);

    exs.randNum();
    expect(exs.randNum).toHaveBeenCalled();
    expect(exs.randNum()).toBe(10);
    expect(exs.randNum()).toBe(10);
    expect(exs.randNum).toHaveBeenCalledTimes(3);
  });

  test('Teste de mock implementation de randNum', () => {
    exs.randNum.mockReset();
    exs.randNum.mockImplementationOnce((a, b) => a / b);

    expect(exs.randNum(20, 2)).toBe(10);
    expect(exs.randNum).toHaveBeenCalled();
    expect(exs.randNum).toHaveBeenCalledTimes(1);
  });

  test('Teste de mock implementation multiplicando', () => {
    exs.randNum.mockReset();
    exs.randNum.mockImplementation((a, b, c) => a * b * c);

    expect(exs.randNum(20, 2, 4)).toBe(160);
    expect(exs.randNum(2, 2, 2)).toBe(8);
    expect(exs.randNum(5, 5, 5)).toBe(125);
    expect(exs.randNum).toHaveBeenCalled();
    expect(exs.randNum).toHaveBeenCalledTimes(3);

    exs.randNum.mockReset();
    exs.randNum.mockImplementation(n => 2 * n);

    expect(exs.randNum(20)).toBe(40);
    expect(exs.randNum(2)).toBe(4);
    expect(exs.randNum).toHaveBeenCalled();
    expect(exs.randNum).toHaveBeenCalledWith(20);
    expect(exs.randNum).toHaveBeenCalledWith(2);
    expect(exs.randNum).toHaveBeenCalledTimes(2);
  });
});

// Exercício 4.
const exs4 = require('../exercises/ex01_4');

jest.mock('../exercises/ex01_4');

describe('Mockagem de 3 funções de uma vez', () => {
  test('Testa implementação de concat e to LowerCase', () => {
    exs4.toUpper.mockImplementation(str => str.toLowerCase());
    exs4.firstLetter.mockImplementation(str => str[str.length - 1]);
    exs4.conca.mockImplementation((s1, s2, s3) => s1.concat(s2, s3));

    expect(exs4.toUpper('Rangel')).toBe('rangel');
    expect(exs4.toUpper).toHaveBeenCalled();
    expect(exs4.toUpper).toHaveBeenCalledTimes(1);
    expect(exs4.toUpper).toHaveBeenCalledWith('Rangel');

    expect(exs4.firstLetter('Rangel')).toBe('l');
    expect(exs4.firstLetter).toHaveBeenCalled();
    expect(exs4.firstLetter).toHaveBeenCalledTimes(1);
    expect(exs4.firstLetter).toHaveBeenCalledWith('Rangel');

    expect(exs4.conca('Rangel', 'Paolo', 'Cardoso')).toBe('RangelPaoloCardoso');
    expect(exs4.conca).toHaveBeenCalled();
    expect(exs4.conca).toHaveBeenCalledTimes(1);
    expect(exs4.conca).toHaveBeenCalledWith('Rangel', 'Paolo', 'Cardoso');
  });
});

// Exercício 5.
const exs5 = require('../exercises/ex01_4');

describe('Mockagem de 3 funções de uma vez', () => {
  test('Teste de restauração de implementation', () => {
    exs5
    expect(exs5.toUpper('Rangel')).toBe('rangel');
    // exs4.toUpper.mockReset();
  });
});