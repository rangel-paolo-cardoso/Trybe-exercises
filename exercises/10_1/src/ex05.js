const myRemoveWithoutCopy = (arr, item) => {
  arr.forEach((i, pos)=> {
    if (item && i === item) arr.splice(pos, 1);
  });
  return arr;
};

module.exports = myRemoveWithoutCopy;