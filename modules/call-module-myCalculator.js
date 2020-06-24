/* Comments...
 This file needs [myCalculator.js] to work...; and, both files should be kept stored together in the 'one' same folder directory.  
 This program shows that it's possible to call any number of different functions...; being stored inside of one separate module file.    
*/

/*** Required files...

var http = require('http');
var doMaths = require('./myCalculator.js');

/*** Variable declarations...

var num1 = 10
var num2 = 2

/*** Main program...

http.createServer(function (req,res){
 res.writeHead(200,{'Content-Type':'text/html'});
 res.write("The total of: " + num1 + " + " + num2 + " = " + doMaths.add(num1,num2));
 res.write("<br>The total of: " + num1 + " - " + num2 + " = " + doMaths.subtract(num1,num2));
 res.write("<br>The total of: " + num1 + " * " + num2 + " = " + doMaths.multiply(num1,num2));
 res.write("<br>The total of: " + num1 + " / " + num2 + " = " + doMaths.divide(num1,num2));
 res.write("<br>The total of: " + num1 + " ** " + num2 + " = " + doMaths.exponent(num1,num2));
 res.end();
}).listen(8080);
