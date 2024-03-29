const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    if (database) {
      const message = countStudents(database);
      message.then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      }).catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${error.message}`);
      });
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
