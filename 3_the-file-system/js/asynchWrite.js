var fs = require('fs');

console.log("Starting Async Write...");
fs.writeFile("../data/write.txt", "Hello world! I am Asynchronous!", function (error) {
	console.log("Written file");
});