var fs = require('fs');

var contents = fs.readFileSync('./index.html');
var buf = new Buffer(contents);

var reply = buf.toString('utf8');


var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

   response.send(reply);
   //  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
