var fs = require('fs');
/*var buffer = fs.readFileSync('/home/velmuruganv/learning--/node-js-practice/program.js');*/
var buffer = fs.readFileSync(process.argv[2]);
var arrLines = buffer.toString().split("\n");
console.log(arrLines.length - 1);
