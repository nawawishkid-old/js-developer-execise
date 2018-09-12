/**
 * Sum all given number.
 *
 * @param {Number} args Number to be summed
 * @returns {Number} Summed number
 */
const sum = (...args) =>
  args.reduce((accumulator, current) => accumulator + current);

/**
 * Add new data to given array without mutating original array.
 *
 * @param {Array} storage Array to be duplicated for storing additional data
 * @param {*} data Data to be added to given array (storage)
 * @returns {Array} New array with additional data added.
 */
const insertData = (storage, data) => [...storage, ...[data]];

/**
 * Return result based on given input
 *
 * @param {Number} input Number to be tested.
 * @returns {String|Number}
 */
const fizzBuzz = input => {
  if (input % 15 === 0) {
    return "FizzBuzz";
  }

  if (input % 5 === 0) {
    return "Buzz";
  }

  if (input % 3 === 0) {
    return "Fizz";
  }

  return input;
};

/**
 * Check if given number a prime number.
 *
 * *** Attention! ***
 * I did not create this function by myself.
 * Maybe due to lack of appropriate knowledge in Mathematics.
 * I copied it from: https://stackoverflow.com/questions/40200089/is-a-number-prime
 *
 * @param {Number} input Number to be tested.
 * @returns {Boolean}
 */
const isPrime = input => {
  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      return false;
    }
  }

  return input !== 1;
};

/**
 * Get calculator object.
 *
 * @param {Number} a Number to be operated.
 * @param {Number} b Number to be operated.
 * @returns {Object} Object containing Arithmatic methods.
 */
const calculator = (a, b) => ({
  add: () => a + b,
  sub: () => a - b,
  div: () => a / b,
  multi: () => a * b
});

module.exports = { sum, insertData, fizzBuzz, isPrime, calculator };
