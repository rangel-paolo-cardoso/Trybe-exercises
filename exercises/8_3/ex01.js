const assert = require('assert');

function sum(a, b) {
  if (typeof Number(a, 10) !== 'number' || typeof Number(b, 10) !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return Number(a, 10) + Number(b, 10);
}

assert.equal(sum(4, 5), 9);
assert.equal(sum(0, 0), 0);
assert.equal(sum(4, "5"), 9);
