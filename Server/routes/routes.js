
module.exports = function(app, passport, path){
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

    // Angular Routes
    app.get('/partials', function(req, res) {
        var requestedView = path.join('./', req.url);
        res.render(requestedView);
    });

}
