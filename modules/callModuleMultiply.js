/*
   This NodeJS program outputs the 7 times tables...
   it is a series of 2 files...;
   1> callModuleMultiply.js  (the 'caller' program module)
   2> multiply.js            (the 'called' program module)
*/
var http=require('http');
var ext=require("./multiply.js");
var tablesNo=7;
var timesNo=0;
http.createServer(function(req,res){
 res.writeHead(200,{'Content-Type':'text/html'});
 for (var timesNo=1;timesNo<13;timesNo++){
    res.write("<br>" + timesNo + " X " + tablesNo + " = " + ext.multiply(timesNo,tablesNo));
 }
 res.end();
}).listen(8080);

