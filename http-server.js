var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200);
    fs.createReadStream(process.argv[3]).pipe(response);
    /*fs.readFile(process.argv[3], function(err, contents) {
        response.write(contents);
        response.end();
    });*/

}).listen(process.argv[2]);
