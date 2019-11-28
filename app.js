var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World my name is");
});

app.listen(4000);