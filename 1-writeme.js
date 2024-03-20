#!/usr/bin/node

const fs = require('fs');

// Check if the correct number of arguments are provided
if (process.argv.length !== 4) {
  console.error('Usage: ./1-writeme.js <file path> <string to write>');
  process.exit(1);
}

const filePath = process.argv[2];
const content = process.argv[3];

// Write the string to the file
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('The file has been saved!');
});
