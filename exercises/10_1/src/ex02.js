const myIndexOf = (arr, item) => {
  let searchedIndex = -1;
  arr.forEach((cur, i) => {
    if (cur === item) searchedIndex = i;
  });
  return searchedIndex;
};

module.exports = myIndexOf;