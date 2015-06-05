app.use(function(req, res, next) {
    var oneof = false;
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if(req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if(req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if(oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});


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
        console.log('DB connection error', err);
    } else {
        console.log('DB connection successful');
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
app.use(allowCrossDomain);
module.exports = app;

//Api
var API_Rules = require('./routes/API_Rules');
app.use('/API_Rules', API_Rules);

var API_Weapons = require('./routes/API_Weapons');
app.use('/API_Weapons', API_Weapons);

var API_Units = require('./routes/API_Units');
app.use('/API_Units', API_Units);

app.set('views', __dirname + '/');
app.set('files', __dirname + '/');
app.use(express.static(__dirname + "/public"));
app.use('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});



app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
