const add = function (a, b) {
  return a + b;
	
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function (arr) {
  let sum = 0;
  let sumarr = arr.map(s => {
    sum += s;
  })
  return sum;
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) return 1;
  return a * (factorial(a - 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
