var http = require('http');
var count=0;
var get1=[];
var get2=[];
var get3=[];
http.get(process.argv[2], function(response) {

    response.setEncoding('utf-8');
   
    var url = process.argv[2];
  // console.log(" process.argv[2] "+ url);
    response.on('data', function(data) {
        get1.push(data);
    });
    response.on('end', function() {
      printResult();
      
    })
});
function printResult(){
	count++;
      if(count===3){
      console.log(get1.join(''));
      console.log(get2.join(''));
      console.log(get3.join(''));
}
}
http.get(process.argv[3], function(response) {

    response.setEncoding('utf-8');
  
    var url = process.argv[3];
   // console.log(" process.argv[3] "+ url);
    response.on('data', function(data) {
        get2.push(data);
    });
     response.on('end', function() {
      printResult();
    })
});

http.get(process.argv[4], function(response) {

    response.setEncoding('utf-8');
    var resBuffer = [];
    var url = process.argv[4];
  //console.log(" process.argv[4] "+ url);
    response.on('data', function(data) {
        get3.push(data);
    });
      response.on('end', function() {
       printResult();
    })
      
   
});
