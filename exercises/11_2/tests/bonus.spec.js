const bonus = require('../exercises/bonus');

const fetchJoke = jest.fn(() => 
  Promise.resolve({
    myJoke: () =>
      Promise.resolve({
        'id': '7h3oGtrOfxc',
        'joke': 'Whiteboards ... are remarkable.',
        'status': 200
      })
  })
);

describe('Mockagem de requisição', () => {

  test('Simulando chamada da API', () => {

    expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
  });
});