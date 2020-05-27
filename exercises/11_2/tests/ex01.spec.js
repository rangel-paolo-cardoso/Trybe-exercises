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
});