var express = require('express');
var fs = require('fs');
var app = express();


app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.listen(3005);
