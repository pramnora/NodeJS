/* 
 NOTE: This file calls module: [hw02.js]...;
 which should be stored inside of the same folder directory to work.
*/ 

var http = require('http');
var message = require('./hw02.js');  

http.createServer(function (req,res){
 res.writeHead(200,{'Content-Type':'text/html'});
 res.write("Message is:<br>" + message.greetings());
 res.end();
}).listen(8080);
