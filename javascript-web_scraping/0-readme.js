#!/usr/bin/node

const fs = require('fs');
const argv = process.argv;

const filePath = argv[2];

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
