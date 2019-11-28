var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World 42kaa1");
});

app.listen(4000);