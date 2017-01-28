var express = require('express');

var app = express(),
    path = require('path');

    var __dirname = '/build';

app.use(express.static('./build'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});

app.listen(8080);

console.log('Server stared!');
