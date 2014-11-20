var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
    methodOverride = require('method-override');

mongoose.connect('mongodb://basil:node@proximus.modulusmongo.net:27017/itejI3pa');
/*mongoose.connect('mongodb:localhost/BlogDB');*/
require('./models/User');
var User = mongoose.model('User');


console.log(__dirname);
console.log("asdfasdf");

app.use(express.static(path.resolve('../Public')));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());



// routes ==================================
//==========================================

app.get('/api/users', function(req, res){
    debugger;
    User.find(function(err, users){
        debugger;

        if(err){
            debugger;

            res.send(err);
        }

        res.json(users)
    });
});

app.post('/api/users', function(req, res){
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    }, function(err, user){
        if(err)
            res.send(err);


        User.find(function(err, users){
            if(err)
                res.send(err);
            res.json(users)
        });
    });
});

/*app.get("/Public/controllers.js", function (req, res) {
    res.sendfile("./Public/controllers.js");
});*/
app.get('*', function(req, res) {
    res.sendfile(path.resolve('../Public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(8080);
console.log("App listening on port 8080");
