#!/usr/bin/node

// Recursive function to compute factorial
function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

// Get the first argument
const args = process.argv.slice(2);
const num = parseInt(args[0]);

// Print factorial
console.log(factorial(num));
