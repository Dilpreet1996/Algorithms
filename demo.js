var http= require('http');
var server=http.createServer(function(req, res)
{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hey dilpreet singh');

});
server.listen(5500,'127.0.0.1');
console.lo('Now ypu are on port 5500'); 