

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/test', function(req,res){
  var origin = req.body.origin;
  var actions = req.body.actions;
  console.log("origin",origin, "actions",actions);
  res.end("yes");
});

app.listen(3000, function () {
  console.log('app is listening at port 3000');
});

