// var http = require('http');
// require('colors');
// var port = parseInt(process.argv[2]) || 1234;
//
// http.createServer(function(request, response) {
//   response.setHeader('Content-type', 'text/html');
//   if (request.url === "/foo") {
//     response.statusCode = 200;
//     console.log(http.STATUS_CODES[200] + ': '+request.url.green);
//     response.end('hello world');
//   } else {
//     response.statusCode = 404;
//     console.log(http.STATUS_CODES[404] + ': '+request.url.red);
//     response.end('Page not found');
//   }
// }).listen(port);
//
// console.log('Server running at http://localhost:'+port+'/');

require('colors');
const http = require('http');
const hostname = '127.0.0.1';
const port = +process.argv[2] || 1234;

const server = http.createServer(function(req, res) {
    if (req.url === "/foo") {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Hello World\n');
    } else {
        res.statusCode = 404;
        console.log(http.STATUS_CODES[404] + ': '+req.url.red);
        res.end('Page not found');
    }
});

server.listen(port, hostname, function() {
    console.log(('Server running at http://127.0.0.1:'+port+'/').green);
});
