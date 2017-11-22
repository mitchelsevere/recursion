var factorial = function (n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};


factorial(0); //=> 1
factorial(1); //=> 1
factorial(2); //=> 1 * 2 === 2
factorial(3); //=> 1 * 2 * 3 === 6
factorial(4); //=> 1 * 2 * 3 * 4 === 24
