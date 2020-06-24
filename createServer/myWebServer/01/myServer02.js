/*
 Created: 14:32 24/06/2020
 Updated: 14:32 24/06/2020
*/

var http = require('http');
var myTextMsg = "";

myTextMsg =  "Line 1";
myTextMsg += "<br>Line 2";
myTextMsg += "<br>Line 3";

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(myTextMsg);
	res.end();
}).listen(8080);
