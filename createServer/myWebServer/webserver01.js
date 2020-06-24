/* Code borrowed from...
What is Node.js Exactly? - a beginners introduction to Nodejs (LearnCode.academy)
https://www.youtube.com/watch?v=pU9Q6oiQNd0&t=183s
*/

/* The following code will set up and run a Node web server on port: 3000;
   in order to check that the server is up and running, successfully,
   type into your web browser address bar, either:
   127.0.0.1:3000
   ...or,...
   localhost:3000
   ...and, you should see the response appear inside of your web browser window saying:
   Hello, world! - From NodeJS Web server
*/

var http = require('http');
var server=http.createServer(function(request,response){
 console.log('got a request');
 response.write('Hello, world! - From NodeJS Web server');
 response.end();
});
server.listen(3000);

