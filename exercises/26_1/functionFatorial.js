function fatorial (n) {
  return n * (n <= 1 ? 1 : fatorial(n - 1));
}

module.exports = fatorial;
