var collection = require("./collection");

var http = require("http");
http.createServer(function(request, response){//parameters of tehe function. the request and teh data back
response.writeHead(200, { "Context-type": "text/plain"}); //gives us the header, tells us we're getting bak plain text not an image or anything. 200 is a status code telling us everything was successful
response.write(collection.lyrics[Math.floor(Math.random()*8)]);
 //plain text, the content of the body we're waiting for
response.end(); // the re1quest is finished
}).listen(8888); // telling you to listen to this port
