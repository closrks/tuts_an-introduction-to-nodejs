var fs = require('fs');

// read as string
console.log("Starting Config Read...");
var contents = fs.readFileSync("../config.json");
console.log("String Contents: " + contents);

// read as object
var config = JSON.parse(contents); 
console.log("Object Config:", config);
console.log("Object Property Username: ", config.username);