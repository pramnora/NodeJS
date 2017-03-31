/* This code borrowed from...
How does Node.js work? (StrongLoopVideos)
https://www.youtube.com/watch?v=X3C2peMLW34
Paused video at: 5:37/9:27.
*/

/* Apparently, this code 'starts' up a web server running on port: 8080;
   and, then, tests the URL address
   to see if there is '/exit' being written at the end of it;
   if so...then, the server 'stops' running.
*/

var http = require('http');
var url = require('url');

http.createServer(function(req,res){

 res.writeHead(200,{'Content-Type':'text/plain'});
 res.end('Hello, world!\nTesting...');

 var uri = url.parse(req.url).pathname;
 if (uri==='/exit')
   process.exit(0);

}).listen(8080,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');
 
