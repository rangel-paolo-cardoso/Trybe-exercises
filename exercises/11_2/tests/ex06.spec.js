const ex6 = require('../exercises/ex06');

describe('Mockando requisição de API', () => {

  ex6.dogPics = jest.fn();
  afterEach(ex6.dogPics.mockReset);

  test('Simulando resolve', async () => {
    ex6.dogPics.mockResolvedValue('request success');

    ex6.dogPics();
    expect(ex6.dogPics).toHaveBeenCalledTimes(1);
    expect(ex6.dogPics).toHaveBeenCalled();
    expect(ex6.dogPics()).resolves.toBe('request success');
    expect(ex6.dogPics).toHaveBeenCalledTimes(2);
  });

  test('Simulando reject', async () => {
    ex6.dogPics.mockRejectedValue('request failed');

    ex6.dogPics();
    expect(ex6.dogPics()).rejects.toBe('request failed');
  });
});