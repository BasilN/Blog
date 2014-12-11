var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = rquire('express-session'),
    path = require('path'),
    methodOverride = require('method-override'),
    passport = require('passport');

var DB = require('./config/database.js');

//configuration ====================================================

//mongoose.connect('mongodb://basil:node@proximus.modulusmongo.net:27017/itejI3pa');
mongoose.connect(DB.devUrl);
// mongoose.connect('mongodb://basil:node@ds051740.mongolab.com:51740/blogdb');
require('./models/User');
var User = mongoose.model('User');



app.use(express.static(path.resolve('./Public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(cookieParser());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.use(express.logger('dev'));

// use passport session
app.use(passport.initialize());
app.use(passport.session());

require('./routes/routes')(app, passport, path, User);




app.get('*', function(req, res) {
    res.sendfile(path.resolve('./Public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(8080);
console.log("App listening on port 8080");
