var fs = require('fs');

console.log("Starting synch read...");
var data = fs.readFileSync("../data/read.txt");
console.log("Contents: " + data);
console.log("Carry on executing...");