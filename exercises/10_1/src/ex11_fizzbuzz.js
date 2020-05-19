const fizzBuzz = (n) => {
  let i = 0;
  while (i < n) {
    i += 1;
    if (typeof i !== 'number') {
      console.log(false);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    };
  }
};

module.exports = fizzBuzz;