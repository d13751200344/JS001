let myName = "Daniel";

let try1 = require("./Greeting");
let try2 = require("./Greeting");

try1.morning(myName);
try2.night(myName);

let path = require("path");
path.extname(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));