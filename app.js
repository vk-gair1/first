var http = require('http');

http.createServer(function( res, req){
	req.end('Harsh');
}).listen(8080);