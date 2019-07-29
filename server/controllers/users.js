const mongoose = require("mongoose");
const User = mongoose.model("User");
var bcrypt = require("bcrypt");

module.exports = {
    findUserByEmail: (req, res) => {
        User.findOne({email: req.params.email}, (err, user) => {
            if (err){
                console.log("findUserByEmail FAILED!");
                res.json(user);
            } else {
                console.log("findUserByEmail SUCCESSFUL!");
                res.json(user);
            }
        });
    },

    createUser: (req, res) => {
        var user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            messages_sent: 0,
            chats_participated: 0,
            chats_created: 0,
        });
        user.save(err => {
            if (err){
                console.log("createUser FAILED!");
                let messages = {"message": "error occured"};
                for (var key in err.errors){
                    messages[key] = err.errors[key].message;
                }
                res.json(messages);
            }else{
                console.log("createUser SUCCESS!");
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    User.findByIdAndUpdate(user._id, { password: hash }, (err, user) => {
                        res.json(user);
                    });
                });
            }
        });
    },

    loginUser: (req, res) => {
        User.findOne({email: req.body.email}, (err, user) => {
            if (err){
                console.log("loginUser FAILED!");
            }
            if (user === null){
                let message = { 
                    "message": "error occured",
                    "email": "Email does not exist"};
                res.json(message);
            }else{
                bcrypt.compare(req.body.password, user.password, (err, user) => {
                    if (user){
                        res.json(user);
                    }else{
                        let message = {
                            "message": "error occured",
                            "password": "Password does not match"};
                        res.json(message);
                    }
                });
            }
        });
    },
    
}