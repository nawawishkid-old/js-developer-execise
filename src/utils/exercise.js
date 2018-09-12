const sum = (...args) =>
  args.reduce((accumulator, current) => accumulator + current);

const insertData = (storage, data) => [...storage, ...[data]];

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

// I did not create this function by myself.
// Maybe due to lack of appropriate knowledge in Mathematic.
// I copy it from: https://stackoverflow.com/questions/40200089/is-a-number-prime
const isPrime = input => {
  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      return false;
    }
  }

  return input !== 1;
};

const calculator = (a, b) => ({
  add: () => a + b,
  sub: () => a - b,
  div: () => a / b,
  multi: () => a * b
});

module.exports = { sum, insertData, fizzBuzz, isPrime, calculator };
