var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World Program Nodejs, my name is Sanjib Behera");
});

app.listen(4000);
