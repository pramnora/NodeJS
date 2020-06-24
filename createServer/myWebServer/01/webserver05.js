/*
 Script borrowed from...
 Node JS Tutorials For Beginner part 3 of 17 (nodejs basic applications)/(Tutorials for beginner)
 https://www.youtube.com/watch?v=lOunGUTMTqg
 Created: 05:32 05/04/2017
 Updated: 05:32 05/04/2017
*/

var http=require('http');

var server=http.createServer(function(req,res){
 res.writeHead(200,{"Content-Type":"text/plain"});
 res.end("Welcome to my first Node.js server...");
});

server.listen(1234,function(){
 console.log("Server started...");
});
