/* Code borrowed from...
Node.js Tutorial For Absolute Beginners
https://www.youtube.com/watch?v=U8XF6AFGqlc&t=1154s
*/

/* The following code will set up and run a Node web server on port: 3000;
   in order to check that the server is up and running, successfully,
   type into your web browser address bar, either:
   127.0.0.1:3000
   ...or,...
   localhost:3000
   ...and, you should see the response appear inside of your web browser window saying:
   Hello, world!
*/

//*** NOTE: ES15 style code...

const http = require('http');

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req,res) => {
 res.statusCode = 200;
 res.setHeader('Content-type', 'text/plain');
 res.end('Hello, world! - From NodeJS/Javascript: ES15 style code'); 
});

server.listen(port,hostname,() => {
 console.log('Server started on port ' + port);
});
