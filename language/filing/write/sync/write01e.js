const fileSystem = require("fs");
var pythonCodeContent = "print('Hello, world!')"
fileSystem.writeFileSync("hw01.py",pythonCodeContent);
console.log("The file: hw01.py, has been created.");
