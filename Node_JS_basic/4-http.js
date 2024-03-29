const http = require('http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
