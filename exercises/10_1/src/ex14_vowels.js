const vogais = ['a', 'e', 'i', 'o', 'u'];

const vowels = (str) => {
  return vogais.reduce((res, letra) => {
    if (str.toLowerCase().includes(letra)) res += 1;
    return res;
  }, 0);
};
console.log(vowels('aeiou'));
module.exports = vowels;