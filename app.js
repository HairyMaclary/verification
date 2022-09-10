const http = require('http');

const hostname = '52.65.157.66';
const port = 80;

const server = http.createServer((req, res) => {
  console.log('A request has arrived.')
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
