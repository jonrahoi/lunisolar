
var exec = require("child_process").exec;
var fs = require("fs");

function directory(response) {
  console.log("Request handler 'start' was called");

  exec("dir", function (error, stdout, stderr) {
    //sleep(10000);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  }); 
}

function upload(response) {
  console.log("Request handler 'upload' was called");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Year");
  response.end();
}

function calendar(response) {
  console.log("Request handler 'calendar' was called");

  fs.readFile("./calendarTemplate.txt", function(error, content) {
    if (error) {
      response.writeHead(500);
      response.edn();
    }
    else {
      response.writeHead(200, {"Content-Type": "text/plain"});
      //response.write("LuniSolar Calendar\n");
      response.end(content, 'utf-8');
    }
  });
}


function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

exports.calendar = calendar;
exports.directory = directory;