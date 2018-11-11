// Code borrowed from...
// YouTube Channel ID name: Code School
//Node.js Tutorial - Intro to Node.js (Level 1)
// https://www.youtube.com/watch?v=GJmFG4ffJZU

var http=require('http');                      // how we require modules
http.createServer(function(request,response){  // create server
 response.writeHead(200);                      // status code in header
 response.write("Hello, world!");              // response body
 response.end();                               // close the connection
}).listen(8080);                               // listen for connections on this port
console.log('Listening on port 8080...');      // write output message to console while server is still running 
