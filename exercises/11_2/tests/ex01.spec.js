const exs = require('../exercises/ex01');

describe('Realizando Mocks', () => {
  test('', () => {
    exs.randNum = jest.fn().mockReturnValue(10);

    exs.randNum();
    expect(exs.randNum).toHaveBeenCalled();
    expect(exs.randNum()).toBe(10);
    expect(exs.randNum()).toBe(10);
    expect(exs.randNum).toHaveBeenCalledTimes(3);
  });
});