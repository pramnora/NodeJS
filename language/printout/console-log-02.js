/*
  Program: Print array containing mixed data item values
  Language: Javascript

  Created: 03:22 30/11/2020
  Updated: 03:22 30/11/2020
*/

//*** array declaration/mixed values...

var arrayName = [1,"two",333,4.4,'a',["x","y","z"],{name:"jack",number:"nnn"}];

//*** print out each array item value...

for (var arrayItemNo =  0; arrayItemNo < arrayName.length; arrayItemNo++){
 console.log(arrayName[arrayItemNo]);
}
