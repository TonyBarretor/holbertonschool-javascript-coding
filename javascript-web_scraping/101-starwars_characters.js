#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId || isNaN(parseInt(movieId))) {
  console.error('Usage: ./101-starwars_characters.js <movie_id>');
  process.exit(1);
}

const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data:', response.statusCode);
    process.exit(1);
  }

  const filmData = JSON.parse(body);
  const charactersUrls = filmData.characters;

  // Function to fetch character name from URL
  const fetchCharacterName = (url) => {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          const characterData = JSON.parse(body);
          resolve(characterData.name);
        }
      });
    });
  };

  // Fetch character names and print them in the order provided by the API
  let charactersPrinted = 0;
  charactersUrls.forEach((url) => {
    fetchCharacterName(url)
      .then((name) => {
        console.log(name);
        charactersPrinted++;
        if (charactersPrinted === charactersUrls.length) {
          // All characters have been printed
          process.exit(0);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        process.exit(1);
      });
  });
});
