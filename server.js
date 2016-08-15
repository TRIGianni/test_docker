var express = require('express');

var app = expres();

app.get('/',function(req,res){
    res.send('Test docker');
});

app.listen(3000);
