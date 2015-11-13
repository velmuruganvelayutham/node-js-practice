var file = require('./my-module.js');

function callback(err, data) {

}
file(process.argv[2], process.argv[3], callback);
