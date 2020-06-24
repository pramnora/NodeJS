var http = require('http');
var doMaths = require('./myCalculator.js');
var num1 = 10
var num2 = 2
http.createServer(function (req,res){
 res.writeHead(200,{'Content-Type':'text/html'});
 res.write("The total of: " + num1 + " + " + num2 + " = " + doMaths.add(num1,num2));
 res.write("<br>The total of: " + num1 + " - " + num2 + " = " + doMaths.subtract(num1,num2));
 res.write("<br>The total of: " + num1 + " * " + num2 + " = " + doMaths.multiply(num1,num2));
 res.write("<br>The total of: " + num1 + " / " + num2 + " = " + doMaths.divide(num1,num2));
 res.write("<br>The total of: " + num1 + " ** " + num2 + " = " + doMaths.exponent(num1,num2));
 res.end();
}).listen(8080);
