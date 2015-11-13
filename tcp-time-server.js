var net = require('net');
net.createServer(function(socket) {

    var date = new Date();
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + "0" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    socket.write(date, 'utf-8');
    socket.end();
}).listen(process.argv[2]);
