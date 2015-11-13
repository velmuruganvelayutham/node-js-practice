var http = require('http');
var url = require('url');

http.createServer(function(request, response) {

    var url_parsed = url.parse(request.url, true);
    console.log(process.argv[2]);
    console.log(url_parsed);
    if (url_parsed.pathname === '/api/parsetime')
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });
    response.write('this is from parsetime');

}).listen(process.argv[2]);
