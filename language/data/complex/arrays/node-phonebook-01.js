/* 
    Program: Phonebook
   Language: Node JS/Version: v14.15.1 

    Created: 02:23 30/11/2020
    Updated: 02:23 30/11/2020
*/

//*** Create database...

var phonebook = [
         {name:"Tom",number:"1"},
         {name:"Dick",number:"2"},
         {name:"Harry",number:"3"},
        ];

//*** Print all database entries...

for (var intEachEntryNo =  0; intEachEntryNo < phonebook.length; intEachEntryNo++){
 console.log(phonebook[intEachEntryNo].name,phonebook[intEachEntryNo].number);
}
