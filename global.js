var path = require("path");
var hello = "Hello World";
var world = hello.slice(6);

console.log(hello);
console.log(world);
console.log(`I Hate The ${world}`);
console.log(__dirname);
console.log(__filename);
console.log(`You're looking at ${path.basename(__filename)}`)
