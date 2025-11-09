#!/usr/bin/node

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Get the command line arguments
const args = process.argv.slice(2);

// Convert arguments to integers
const num1 = parseInt(args[0]);
const num2 = parseInt(args[1]);

// Print the sum using the add function
console.log(add(num1, num2));