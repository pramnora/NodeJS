/* 
 NOTE: This file requires the file: [hw01.js];
       which is kept stored inside of the same directory folder to work.
*/

var http = require('http');
var message = require('./hw01.js');

http.createServer(function (req,res){
 res.writeHead(200,{'Content-Type':'text/html'});
 res.write("Message is: " + message.greetings());
 res.end();
}).listen(8080);
