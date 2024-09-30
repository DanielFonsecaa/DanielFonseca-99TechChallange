//One by one
let sum_to_n_a = (n: number): number => {
  //if n is equal or less than 0, the sum is 0
  if (n <= 0) return 0;
  let sum = 0;
  //we will add one by one until it reaches n
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//Using an Array
let sum_to_n_b = (n: number): number => {
  const array: number[] = [];
  let sum = 0;
  //transform each number into a array
  for (let i = 0; i <= n; i++) {
    array.push(i);
  }
  //sum the array
  array.forEach((num) => {
    sum += num;
  });
  return sum;
};

//formula
let sum_to_n_c = (n: number): number => {
  //formula for adding consecutive numbers is n/2 * (firstNumber + lastNumber)
  let firstNumber = 1;
  let lastNumber = n;
  if (n <= 0) return 0;
  return (lastNumber / 2) * (firstNumber + lastNumber);
};

// Test cases
const test: number[] = [5, 10, 1, 0, -5];

test.forEach((n) => {
  console.log(`Testing n = ${n}`);
  console.log(`First way: ${sum_to_n_a(n)}`);
  console.log(`Second way: ${sum_to_n_b(n)}`);
  console.log(`Third way: ${sum_to_n_c(n)}`);
  console.log("");
});

//I just did the same as the problem 1 but with types. Then compiled the ts to js and ran the test
