var fs = require('fs');

console.log("Starting Sync Write...");
fs.writeFileSync("../data/write.txt", "Hello world! I am Synchronous!");
console.log("Finished writing!");