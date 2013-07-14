var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(256);

var contents = fs.readFileSync('index.html');

var reply = buf.toString('ascii', contents);

app.get('/', function(request, response) {

   response.send(reply);
   //  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
