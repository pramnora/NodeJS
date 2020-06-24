var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('Simple server, displays 1 line text message.');
	res.end();
}).listen(8080);
