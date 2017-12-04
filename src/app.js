var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("proc.env.foobar", process.env.foobar);
    res.end('Hello World!  env var set:' + (typeof process.env.foobar != "undefined"));
}).listen(8080);