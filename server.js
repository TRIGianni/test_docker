var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send('Test docker version 2');
});

app.listen(3000);
