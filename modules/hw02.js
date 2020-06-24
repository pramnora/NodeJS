/*
 NOTE: This [hw02.js] file...is the called module file;
       it works in conjunction with the calling file: [call-module-hw02.js];
       also, both of these files need to be kept stored inside of the 'one' same directory folder to work.
*/

var textMsg = "";

textMsg  = "<br>Line 1";
textMsg += "<br>Line 2";
textMsg += "<br>Line 3";

exports.multiLineText = function (){ 
  return textMsg;
}
