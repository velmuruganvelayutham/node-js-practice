var http = require('http');
http.get(process.argv[2], function(response) {

    response.setEncoding('utf-8');
    var resBuffer = [];
    response.on('data', function(data) {
        resBuffer.push(data);
    });
    response.on('end', function() {
        console.log(resBuffer.join(''));
    })
});
