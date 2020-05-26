beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Meus comentários
// Eu acredito que a saída no console será a seguinte:
// 1 - beforeEach -> certo
// 1 - test -> certo
// 1 - afterEach -> certo
// 1 - beforeEach -> certo 
// 2 - beforeEach -> certo
// 2 - test -> certo
// 2 - afterEach -> certo
// 1 - afterEach -> certo
