const ratioFunc = require("../ratio/index.js");

const factorialFunc = require("../factorial/index.js");

function ratioAndFactorial(arg1, arg2, arg3) {
  const ratio = ratioFunc(arg1, arg2);
  const factorial = factorialFunc(arg3);

  const output = {};

  output.ratio = ratio;
  output.factorial = factorial;

  return output;
}

module.exports = ratioAndFactorial;
