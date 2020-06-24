/* This file works in conjunction with: [add2num.js] */

var http = require('http');
var doMaths = require('./add2num.js');

var num1 = 1
var num2 = 2

http.createServer(function (req,res){
 res.writeHead(200,{'Content-Type':'text/html'});
 res.write("The total of: " + num1 + " + " + num2 + " = " + doMaths.add(num1,num2));
 res.end();
}).listen(8080);
