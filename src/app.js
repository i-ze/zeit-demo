var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("proc.env.foobar", process.env.foobar);
    res.end('Hello <b>World</b>!!!  env var "foobar":' + process.env.foobar);
}).listen(8080);