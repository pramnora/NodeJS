# NODEJS MODULES  

NodeJS, allows one to break up a **large** Javascript file...into being a series of smaller...and, separately, callable code *modules*, instead.

Each code module has..  

- the file extension: [.js]    
- uses the 'exports' statement to export a particular function/module  (eg. exports.add = function(x,y){return x+y;})    

This *modular* coding technique; also, allows one to build libraries of 'reusable' functions.../-etc.  

-----

## PROBLEMS I'M HAVING TO GO FIGURE OUT, AT THE MOMENT...  

So, far to date, I seem to have figured out how to get the 'called' module to return back only a 'single' result;  
the which single result can be used inside of a looping structure which is written inside of the 'calling' file.  

But, I've still not worked out how to get a 'called' module to return back say the output of a loop  
from inside of the 'called' file itself.

