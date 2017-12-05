var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log("proc.env.foobar", process.env.foobar);
    var text ="missing";
    console.log("query params", req.query);
    if (req.query.hasOwnProperty("text")) {
	text = req.query.text; 
    }
    console.log("provided text param", text);
    loadAscii(text, function(asciiText) {
        //res.end('Hello <b>World</b>!!!  env var "foobar":' + process.env.foobar);
        htmlText = asciiText.replace(/\n/g, '<br />');
        res.end("Result: </br>" + htmlText);
    })
}).listen(8080);


function loadAscii(text, loadCallback) {
var http = require('http');

var options = {
  host: 'artii.herokuapp.com',
  path: '/make?text=' + text
};

callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log("loaded ascii: " + str);
    loadCallback(str);
  });
}

http.request(options, callback).end();
}