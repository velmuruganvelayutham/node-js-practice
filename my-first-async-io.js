var fs = require('fs');
/*var buffer = fs.readFileSync('/home/velmuruganv/learning--/node-js-practice/program.js');*/
fs.readFile(process.argv[2], 'utf-8', function(err, data) {
    if (err) {

    } else {
        console.log(data.split('\n').length - 1);
    }

});
