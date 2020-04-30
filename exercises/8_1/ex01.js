const fat = (num1) => {
  let str = '';
  let res = 1;
  for (let i = num1; i >= 1; i -= 1) {
    res *= i;
    if (i === 1) {
      str += `${i}`;
      break;
    }
    str += `${i} * `;
  }
  return `${num1}! = ${str} = ${res}`;
}

console.log(fat(5));