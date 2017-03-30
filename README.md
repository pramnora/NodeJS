# NodeJS
NodeJS code

INTRODUCTION    
Believe it or not, but, NodeJS brings Javascript coding straight onto the Desktop. At first, I really couldn't believe it myself...that is until when I tried it. Wow!  

Furthermore, NodeJS is incredibly simple and easy to both install/uninstall. Just go along to...  
https://nodejs.org/en/    
...and, on the front page it has 2 x download buttons: [LTS]/[Current]. I usually pick to download what is the current most version...which also tends to be the most up to date version, as well. Right now, I'm using Windows 10; and, this will download the Windows automatic set up (.msi) file; after this file has completed downloading; then, you simply click on it to run; and, keep on clicking [OK] to accept all of the program defaults; finally, click on [Finish]; and, that's it, you're all done...in just merely a few minutes.   

-(*NOTE*: If you ever wish to uninstall Node; then, it really is quite as simple and straight forwards as uninstalling any other Windows program; just look inside of Programs Manager; and, then, click: Uninstall.)-

Next, go and run a DOS prompt...use [Windows Picture Icon key] + [R]...and, type in: cmd...next, press [OK]. Then, if you type in at the DOS command prompt either of the two following commands it will tell you which version you are using:  

node -v  
npm -v  

*NOTE*: Downloading NodeJS does, automatically, come with NPM/Node Package Manager.  

Now, in order to load Node to run inside of Windows DOS Prompt; simply, type in...

node

...then, to test out if Javascript commands are working type...

(use node as a calculator)  
3+3      
3-3  
3*3  
3/3   

(use variables)  
var a=1  
var b=2  
var c=a+b    
c  

(write a time tables program)  
var y=7;  
var (x=1;x<13;x++){  
 console.log(x + " X " + y + " = " + x*y;  
}  

*NOTE*: Because Node is not running inside of the web browser environment anymore; therefore, it follows you cannot use: 
document.write()/or, window objects  
...instead, you should use...  
global  

Example...  
var a=1  
global.a  

_NOTE_: Type [CTRL] + [C], twice, in orde to quit running node. Type: exit, to quit running DOS. 

## Node JS commands...

node -v   
npm -v  
