// node requires
var http = require('http');
var fs = require('fs');

// load config synch
console.log("Starting");
var config = JSON.parse(fs.readFileSync("../config.json"));
var host = config.host;
var port = config.port;

// create web server
var server = http.createServer(function (request, response) {
	console.log("Received request: " + request.url);
	fs.readFile("./../public" + request.url, function(error, data){
		if (error) {
			response.writeHead(404, {"Content-type":"text/plain"});
			response.end("Oops! can't find the page");
		} else {
			response.writeHead(200, {"Content-type":"text/html"});
			response.end(data);
		}
	});
});

// listen
server.listen(port, host, function() {
	console.log("Listening on " + host + ":" + port);
});


// watch config for changes to web server
fs.watch("../config.json", function(){
	config = JSON.parse(fs.readFileSync("../config.json"));
	host = config.host;
	port = config.port;
	server.close();
	server.listen(port, host, function() {
		console.log("Now listening on " + host + ":" + port);
	});
});