var fs = require('fs');
var path = require('path');

module.exports = function(pathDir, extname, callback) {

    fs.readdir(pathDir, function(err, files) {

        if (err)
            return callback(err);
        var array = [];

        for (var i = 0; i < files.length - 1; i++) {
            var ext = path.extname(files[i]);
            if (ext === "." + extname) {
                array.push(files[i]);
                console.log(files[i]);
            }
        }


        callback(null, array);
    });
}
