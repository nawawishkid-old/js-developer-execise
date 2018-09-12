const sum = (...args) =>
  args.reduce((accumulator, current) => accumulator + current);

const insertData = (storage, data) => [...storage, ...[data]];

const fizzBuzz = input => {
  let result;

  switch (input) {
    case input % 3 === 0:
      result = "Fizz";
      break;
    case input % 5 === 0:
      result = "Buzz";
      break;
    case input % 15 === 0:
      result = "FizzBuzz";
      break;

    default:
      result = input;
      break;
  }

  return result;
};

const isPrime = input => input % 2;

const calculator = (a, b) => ({
  add: () => a + b,
  sub: () => a - b,
  div: () => a / b,
  multi: () => a * b
});

export default { sum, insertData, fizzBuzz, isPrime, calculator };
