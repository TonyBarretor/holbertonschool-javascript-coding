#!/usr/bin/node

const request = require('request');

// Check if the correct number of arguments are provided
if (process.argv.length !== 3) {
  console.error('Usage: ./3-starwars_title.js <episode number>');
  process.exit(1);
}

const episodeNumber = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${episodeNumber}/`;

// Send GET request to Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  
  if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
    return;
  }

  try {
    const movie = JSON.parse(body);
    console.log(movie.title);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
