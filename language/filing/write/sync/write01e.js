/* 
 This program demonstrates how it's possible to use, NodeJS; 
 to write a program file of a different programming language,
 and, in this particular case, the language is: Python/[.py]
*/

const fileSystem = require("fs");
var pythonCodeContent = "print('Hello, world!')"
fileSystem.writeFileSync("hw01.py",pythonCodeContent);
console.log("The file: hw01.py, has been created.");
