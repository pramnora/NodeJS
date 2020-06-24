/*
 Created: 14:43 24/06/2020
 Updated: 14:43 24/06/2020 
*/

var http = require('http');
var myWebPageText = "";

myWebPageText  = "<!DOCTYPE html>";
myWebPageText += "<html lang='en'>";
myWebPageText += "<head>";
myWebPageText += "<meta charset='utf-8'>";
myWebPageText += "<title>Test: Node JS server</title>";
myWebPageText += "<style>";
myWebPageText += "html{margin:50px;}";
myWebPageText += "h1{text-align:center;}";
myWebPageText += "main>p{text-indent:1cm;}";
myWebPageText += "footer>p{text-align:right;}";
myWebPageText += ".clsTimeDateStamp{color:red;font-style:italic;}";
myWebPageText += "</style>";
myWebPageText += "</head>";
myWebPageText += "<body>";
myWebPageText += "<header>";
myWebPageText += "<h1>Test: Node JS server</h1>";
myWebPageText += "</header>";
myWebPageText += "<hr>";
myWebPageText += "<main>";
myWebPageText += "<h2>Server Messages:</h2>";
myWebPageText += "<p>The server seems to be up and running ok...</p>";
myWebPageText += "</main>";
myWebPageText += "<hr>";
myWebPageText += "<footer>";
myWebPageText += "<p>";
myWebPageText += "Page created: <span class='clsTimeDateStamp'>14:02 24/06/2020</span>";
myWebPageText += "<br>";
myWebPageText += "Last updated: <span class='clsTimeDateStamp'>14:02 24/06/2020</span>";
myWebPageText += "</p>";
myWebPageText += "</footer>";
myWebPageText += "</body>";
myWebPageText += "</html>";

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(myWebPageText);
	res.end();
}).listen(8080);
