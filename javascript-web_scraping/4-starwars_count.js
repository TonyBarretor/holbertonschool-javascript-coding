#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;
    films.forEach((film) => {
      film.characters.forEach((characterUrl) => {
        if (characterUrl.includes(`${characterId}`)) {
          count++;
        }
      });
    });

    console.log(count);
  }
});
