var http = require('http');
var queue = [];
http.get(process.argv[2], function(response) {

    response.setEncoding('utf-8');
    var resBuffer = [];
    var url = process.argv[2];
    response.on('data', function(data) {
        resBuffer.push(data);
    });
    response.on('end', function() {
        queue.push({
            url: resBuffer.join('')
        });
    })
});
http.get(process.argv[3], function(response) {

    response.setEncoding('utf-8');
    var resBuffer = [];
    var url = process.argv[3];
    console.log(url + "url");
    response.on('data', function(data) {
        resBuffer.push(data);
    });
    response.on('end', function() {
        queue.push(url);
        queue.push(resBuffer.join(''));

    })
});

http.get(process.argv[4], function(response) {

    response.setEncoding('utf-8');
    var resBuffer = [];
    var url = process.argv[4];
    response.on('data', function(data) {
        resBuffer.push(data);
    });
    response.on('end', function() {
        queue.push({
            url: resBuffer.join('')
        });
        console.log(queue);
    })
});
