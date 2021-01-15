/*
Created: 17:24 15/01/2021
Updated: 17:24 15/01/2021

Code borrowed from...
https://channel9.msdn.com/Series/Beginners-Series-to-JavaScript/Running-JavaScript-browser-or-server-3-of-51
Video point: 2:51/00:47

NOTE: The code has been slightly modified by myself.
*/

const fileSystem = require("fs");
fileSystem.writeFileSync("hw01.txt","Hello, world!");
console.log("The file: hw01.txt, has been created.");
