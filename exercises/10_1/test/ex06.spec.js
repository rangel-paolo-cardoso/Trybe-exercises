const myFizzBuzz = require('../src/ex06');

describe('FizzBuzz test', () => {
  test('Verifica frase de saída', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(11)).toBe(11);
    expect(myFizzBuzz('false')).toBe(false);
  });
});