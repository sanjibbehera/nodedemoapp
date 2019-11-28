var express = require('express');
var app = express();
console.log('Hello World from Node.js');
app.get('/',function(req,res) {
  res.send("Hello World my name is Sanjib Behera");
});

app.listen(4000);