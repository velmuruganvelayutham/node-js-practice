var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, files) {
    for (var i = 0; i < files.length - 1; i++) {
        var ext = path.extname(files[i]);
        if (ext === "." + process.argv[3])
            console.log(files[i]);
    }

});
