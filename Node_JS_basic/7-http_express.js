const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2];
  if (database) {
    const message = countStudents(database);
    message.then((data) => {
      res.status(200).send(`This is the list of our students\n${data}`);
    }).catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
  }
});

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
