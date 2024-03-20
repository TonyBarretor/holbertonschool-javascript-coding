#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
});
