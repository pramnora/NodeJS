# NodeJS
NodeJS code

**INTRODUCTION**    

If you already understand all of the main 3 core web technologies: HTML/CSS/Javascript; and, especially, Javascript...; then, NodeJS is, quite simply, a 'must' have for you. The main advantages are 2...  

- You can write/run Javascript code outside of the web browser; and, inside of a Windows DOS command terminal.  
- You can use NPM/Node Package Manager -that's included with NodeJS- which is, reputedly, the biggest Javascript code library in the whole wide world  

Basically, you run NodeJS Javascript code by using two different modes...first, open up a Windows DOS command window terminal...; then, at the DOS prompt...  

- type Javascript code (Math.PI)...and, the Javascript code will be, instantly, evaluated   
- type keyword: node filename.js...and, the Javascript code inside of the file will be run   

**NODE JS INSTALLATION PROCESS ON WINDOWS 10**    

Furthermore, NodeJS is incredibly simple and easy to both install/uninstall. Just go along to...  
https://nodejs.org/en/    
...and, on the front page it has 2 x download buttons: [LTS]/[Current]. I usually pick to download what is the current most version...which also tends to be the most up to date version, as well. Right now, I'm using Windows 10; and, this will download the Windows automatic set up (.msi) file; after this file has completed downloading; then, you simply click on it to run; and, keep on clicking [OK] to accept all of the program defaults; finally, click on [Finish]; and, that's it, you're all done...in just merely a few minutes.   

For further reading: See NOTE(1 & 2)...  

**CHECKING WHICH VERSIONS OF BOTH NODE/NPM YOU GOT...?**  

First, open a Windows DOS prompt box by doing a combination key press of...  
[Windows Picture Icon key] + [R]  
...and, type into the RUN dialog box that appears:    
cmd  
...next, press [OK]. A black screen window should appear showing the command prompt symbol: (>); if you type in after the DOS command prompt: (>) either of the two following commands it will tell you which version(s) you are using:  

> node -v  
v8.11.1  
> npm -v   
5.5.1  

Other node commands are...  
> npm help  
> npm update  

For further reading: See NOTE(3)...  

**HOW TO RUN JAVASCRIPT CODE ON THE FLY USING NODE INSIDE OF WINDOWS DOS PROMPT BOX**  

Now, in order to load Node to run inside of Windows DOS command Prompt box; simply, type in...

> node

...then, to test out if Javascript commands are working type...

(use node as a calculator)  
> 3+3 (6)       
> 3-3 (0)   
> 3*3 (9)    
> 3/3 (1)   
> 3**3 (27)    
> Math.PI (3.141592653589793)     

(use variables)  
> var a=1  
> var b=2  
> var c=a+b    
> c  

(write a time tables program)  
> var y=7;  
> var (x=1;x<13;x++){  
>  console.log(x + " X " + y + " = " + x*y;  
> }  

For further reading: See NOTE(4)...  

**HOW TO WRITE/RUN JAVASCRIPT PROGRAM FILES (.js) USING NODE INSIDE OF WINDOWS DOS PROMPT BOX**  

First, write the Javascript file...  

> var a=1;  
> var b=2;  
> console.log(a+b);  
...next save the file as being called:   
add.js  

Now, open up a DOS command prompt window...and, surf to where the Javascript file you created is located...; and, type into the DOS window...  
> node add  
...the output result should display as...  
3

**NODEJS, OFFERS MANY OTHER ADVANTAGES OVER JUST PLAIN VANILLA JAVASCRIPT**

It's possible to create...

- your own web server in just merely 7 lines of NodeJS code (you can run web pages)   
- your own chat program  
- etc.  

## NOTES

**NOTE: (1)**: Where do I go to both download/install NodeJS for FREE?  
https://nodejs.org/en/  

**NOTE: (2)**: If you ever wish to uninstall Node; then, it really is quite as simple and straight forwards as uninstalling any other Windows program; just look inside of Programs Manager; find the program by  typing in the name: node; then, click: Uninstall.

**NOTE: (3)**: Downloading NodeJS does, automatically, come with NPM/Node Package Manager. NPM, allows you to download other Node programs. To learn more, and, discover which other packages it is possible to install; then, go to: http://www.npm.org.

**NOTE: (4)**: Because Node is not running inside of the web browser environment anymore; therefore, it follows you cannot use: 
document.write()/or, window, objects  
...instead, you should use...  
global  

Example...  
var a=1  
global.a  
...or, instead, use...  
console.log(a)  
...or, a lot more simply, just type...  
a  

**NOTE: (5)**: It is possible to run NodeJS code to execute not within the web browser itself; but, instead, inside of the console...just use:    
> curl localhost:8080  
> Hello, world!  
>  

## Node JS commands...used when running node inside of DOS...  

> node -v   (shows which node version you are currently running)  
> npm -v    (shows which npm version you are currently running)  

> [CTRL]+[C], twice (to quit running node)      
> .exit, (to quit running node)  
> exit              (to quit running DOS)    

> npm view packageName (shows files contained inside of the named package before downloading it)  
> npm view packageName versions (shows ALL of the different versions of the named package)  
> npm init (creates a [package.json] file which lists all installed packages for a particular app. to work)    
> npm install (will read the [package.json] file that lists dependencies/then, re-install any deleted packages)  
> npm install packageName  (both downloads/and, installs that particular package name: ExpressJS/-etc.)  
  *NOTE*: Packages are installed into a folder called: Node modules  
> npm install packageName -S (the -S flag adds the files to [package.json] as being dependencies)
> npm install packageName -g (installs the package so that it can be used globally/as well as, locally)  
> npm install packageName@version number (installs a specific package version number/eg. install underscore@1.6.0/)
> npm uninstall packageName (deletes the named package)    
> npm outdated (lists all of the outdated packages)  
> npm update (updates installed packages)  
> npm update --save (updates packages/and, the [package.json] file which lists package dependencies)   
> npm ls  (lists all of the locally installed packages)  
> npm ls -g (lists all of the globally installed packages)  
> npm install npm -g  
 
## Links...

http://www.node.org  
http://www.npm.org  

## Tutorials

### Online 'interactive' tutorials  

W3Schools  
https://www.w3schools.com/nodejs/default.asp  

### Video tutorials

What is Node.js Exactly? - a beginners introduction to Nodejs  
https://www.youtube.com/watch?v=pU9Q6oiQNd0&t=183s  
Node.js Tutorial For Absolute Beginners (Traversey Media)  
https://www.youtube.com/watch?v=U8XF6AFGqlc&t=1154s   
Node.js Tutorial - Intro to Node.js (Level 1) (Code School)  
https://www.youtube.com/watch?v=GJmFG4ffJZU  
Node.js Crash Course  
https://www.youtube.com/watch?v=fBNz5xF-Kx4  

StrongLoopVideos series...  
What is Node.js?  
https://www.youtube.com/watch?v=e8ZLfcHxrD8     
How does Node.js work?  
https://www.youtube.com/watch?v=X3C2peMLW34  

Daniel Shiffman video series...  
15.1: What is Node.js? - Twitter Bot Tutorial  
https://www.youtube.com/watch?v=RF5_MPSNAtU  

'Tutorials for beginner' series...  
nodejs tutorials for beginner part 1 of 17 (node.js introduction )  
https://www.youtube.com/watch?v=iyGlZpWrPgs&list=PLdtEimKxDSoXDq-zE2YZuJtbERh4x0lxm  

What is NPM?  (series of 11 tutorials from: npm inc)  
https://www.youtube.com/watch?v=pa4dc480Apo&list=PLQso55XhxkgBMeiYmFEHzz1axDUBjTLC6  




