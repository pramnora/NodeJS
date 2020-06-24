/* Code borrowed from...
Node.js Tutorial For Absolute Beginners
https://www.youtube.com/watch?v=U8XF6AFGqlc&t=1154s
*/

/* The following code sets up a web server running on port: 3000;
   it will output a [.html] web page file contents into your web browser.

   In order to check that the server is up and running, successfully,
   type into your web browser address bar, either:
   
   127.0.0.1:3000
   ...or,...
   localhost:3000

   ...to see the web page output.

   NOTE: Needs web page file: [index.html] to work.
*/

//*** NOTE: ES15 style code...

//*** import library files...

const http = require('http'); //*** http library
const fs = require('fs');     //*** file system library

//*** set up port/hostname details...

const hostname = '127.0.0.1';
const port = '3000';

//*** read [.html] file data...

fs.readFile('index.html',(err,html) => {

 if(err){
  throw err;  //*** check if any errors...
 }

 //*** create server...

 const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.write(html);
  res.end();
 });

 //*** start server listening...

 server.listen(port,hostname,() => {
  console.log('Server started on port ' + port);
 });

});
