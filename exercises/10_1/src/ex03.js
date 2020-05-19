const mySum = (arr) => {
  let result = 0;
  arr.forEach(item => result += item);
  return result;
};

module.exports = mySum;