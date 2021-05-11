/* 
 This program demonstrates how it's possible to use, NodeJS; 
 to write a program file of a different programming language,
 and, in this particular case, that language is: HTML/[.html]
*/

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
