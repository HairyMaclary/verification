// const http = require('http');

// const hostname = '52.65.157.66';
// const port = 80;

// const server = http.createServer((req, res) => {
//   console.log('A request has arrived.')
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, "", () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const indexFile = require('/index.html')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// app.get('/',(req, res) => res.send('Hello World'));
app.get('/',(req, res) => res.send(indexFile);
app.listen(PORT, () => console.log(`Server listening in port ${PORT}`))
