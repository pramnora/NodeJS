# NODEJS MODULES  

NodeJS, allows one to break up a **large** Javascript file...into being a series of smaller...and, separately, callable code *modules*, instead.

Each code module has..  

- the file extension: [.js]    
- uses the 'exports' statement to export a particular function/module  (eg. exports.add = function(x,y){return x+y;})    

This *modular* coding technique; also, allows one to build libraries of 'reusable' functions.../-etc.  

-----

## PROBLEMS I'M HAVING TO GO FIGURE OUT, AT THE MOMENT...  

So, far to date, I've managed to figure out how to get the code modules to return back only 'single' results;  
however, I've still not managed to figure out how it would return say the multiple output of a loop...;  
one possible solution, I suppose, would be to build a single 'output string'; and, then, return that back;  
however, I'm not sure if there might be any far better way around having to go do this.  
