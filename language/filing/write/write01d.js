const fileSystem = require("fs");
var webPageContent = "<!DOCTYPE html>\n"
                   + "<html lang='en'>\n"
                   + "\t<head>\n"
                   + "\t\t<meta charset='utf-8'>\n"
                   + "\t\t<title>Test web page</title>\n"
                   + "\t</head>\n"
                   + "\t<body>\n"
                   + "\t\t<p>Hello, world!</p>\n"
                   + "\t</body>\n"
                   + "</html>"; 
fileSystem.writeFileSync("webpage01.html",webPageContent);
console.log("The file: webpage01.html, has been created.");
