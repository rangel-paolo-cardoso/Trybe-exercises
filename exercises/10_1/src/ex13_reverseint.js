const reverseInt = (n) => {
  const reverso = parseInt(String(n).split('').reverse().join(''));
  return (n < 0) ? -reverso: reverso;
};

module.exports = reverseInt;