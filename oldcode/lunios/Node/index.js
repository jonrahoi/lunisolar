
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.calendar;
handle["/calendar"] = requestHandlers.calendar;
handle["/directory"] = requestHandlers.directory;

server.start(router.route, handle);