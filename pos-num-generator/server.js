var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  var num = Math.floor(Math.random() * 600) + 1 ;
  response.end(num.toString());
}
var www = http.createServer(handleRequest);
www.listen(8082);
