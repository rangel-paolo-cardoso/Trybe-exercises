const vogais = ['a', 'e', 'i', 'o', 'u'];

const vowels = (str) => vogais.reduce((res, letra) => res += (str.toLowerCase().includes(letra)) ? 1: 0, 0);

module.exports = vowels;