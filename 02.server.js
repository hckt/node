/*'use stric'
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor Iniciado http://${hostname}:${port}/`);
});*/

'use stric'

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hola Mundo</h1>\n');
  res.end('<p>Servidor Local...  </p>\n');
  res.end('<ul><li>Inicio</li></ul>\n');
  res.end('<footer>Server NodeJs</footer>\n');
});

server.listen(port, hostname, () => {
  console.log(`Servidor Iniciado http://${hostname}:${port}/`);
});
