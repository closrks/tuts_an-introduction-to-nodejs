var fs = require('fs');

console.log("Starting asynch read...");
fs.readFile("../data/sample.txt", function (error, data) {
	console.log("Contents: " + data);
});
console.log("Carry on executing...");