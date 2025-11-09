#!/usr/bin/node

// Get the first argument from the command line
const args = process.argv.slice(2);

// Convert the argument to an integer
const times = parseInt(args[0]);

// Check if the argument is not a number
if (isNaN(times)) {
  console.log('Missing number of occurrences');
} else {
  // Loop from 0 to times-1
  for (let i = 0; i < times; i++) {
    console.log('C is fun'); // Print the message each time
  }
}