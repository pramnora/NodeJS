const fileSystem = require("fs");
var multipleLines = "Fall leaves, fall,\n" 
                  + "Die flowers away,\n\n"
                  + "Lengthen night,\n"
                  + "And, shorten day.\n\n"
                  + "Every leaf speaks bliss to me,\n"
                  + "Fluttering from the Autumn tree,\n\n"
                  + "I shall smile when wreathes of snow,\n"
                  + "Blossom where the rose should grow;\n\n"
                  + "I shall sing when nights decay,\n"
                  + "Ushers in a drearier day.\n\n"
                  + "-Poem: Emily Bronte"; 
fileSystem.writeFileSync("hw03.txt",multipleLines);
console.log("The file: hw03.txt has been created.");
