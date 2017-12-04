var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("proc.env.foobar", process.env.foobar);
    res.end('Hello World!!!  env var "foobar":' + process.env.foobar);
}).listen(8080);