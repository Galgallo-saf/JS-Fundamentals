#!/usr/bin/node

// Get the first argument
const args = process.argv.slice(2);
const size = parseInt(args[0]);

// Check if size is a valid number
if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  // Loop to print each row
  for (let i = 0; i < size; i++) {
    let row = '';
    // Loop to build each row with X
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}