/**
 * Created by Basil on 11/19/2014.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    username:String,
    password: String,
});

mongoose.model('User', UserSchema);