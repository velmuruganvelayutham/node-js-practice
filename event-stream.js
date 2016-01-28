var Readable = require('stream').Readable,
    util = require('util'),
    fs = require('fs');

var readStream = fs.createReadStream(process.argv[2]);

readStream.on('data', function(chunk) {
    console.log(chunk);
});

readStream.on('end', function() {
    console.log('stream end ');
});
