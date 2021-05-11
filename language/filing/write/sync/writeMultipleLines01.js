const fileSystem = require("fs");
var multipleLines = "line 1\n" 
                  + "line 2\n"
                  + "line 3";
fileSystem.writeFileSync("hw02.txt",multipleLines);
console.log("The file: hw02.txt has been created.");
