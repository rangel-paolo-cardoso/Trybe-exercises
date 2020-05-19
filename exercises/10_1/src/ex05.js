const myRemoveWithoutCopy = (arr, item) => {
  arr.forEach((i, pos)=> {
    if (item && i === item) arr.splice(pos, 1);
  });
  return arr;
};
let a  = [1, 2, 3, 4]
console.log(myRemoveWithoutCopy(a, 5));
module.exports = myRemoveWithoutCopy;