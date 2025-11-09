#!/usr/bin/node

// Recursive function to compute factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Get the first argument
const args = process.argv.slice(2);
const num = parseInt(args[0]);

// If num is not a number, print 1
if (isNaN(num)) {
  console.log(1);
} else {
  console.log(factorial(num));
}
