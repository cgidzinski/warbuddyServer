var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WarbuddyServer', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;

//Api
var API_Rules = require('./routes/API_Rules');
app.use('/API_Rules', API_Rules);


app.set('views', __dirname + '/');
app.set('files', __dirname + '/');
app.use(express.static(__dirname + "/public"));
app.use('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


//Api
var API_Rules = require('./routes/API_Rules');
app.use('/API_Rules', API_Rules);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
