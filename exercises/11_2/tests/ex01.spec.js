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