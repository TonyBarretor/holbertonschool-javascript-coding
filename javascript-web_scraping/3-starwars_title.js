#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const title = JSON.parse(body).title;
    console.log(title);
  }
});
