var mongoose = require("mongoose");
var validate = require("mongoose-validator"); // mongoose validator via validate.js

var nameValidator = [
    validate({
        validator: "isLength",
        arguments: [3, 50],
        message: "Name should be betwee {ARGS[0]} and {ARGS[1]} characters",
    }),
    validate({
        validator: "isAlphanumeric",
        message: "Name should contain alpha-numeric characters only",
    }),
]

// The password's first character must be a letter, 4 ~ 15, letters, numbers and the underscore
var passwordValidator = [
    validate({
        validator: "matches",
        arguments: /^[a-zA-Z]\w{3,14}$/i,
        message: "Not a valid password"
    }),
]

const ChatSchema = new mongoose.Schema({
    name: {
        required: [true, "Name is required"],
        type: String,
        validate: nameValidator,
    },
    password: {
        type: String,
        validate: passwordValidator,
    },
    active_members: {
        type: Number,
    },
    messages: [],
}, { timestamps: true}); // automatically creates "createdAt" & "updatedAt" with ISODate value
// will auto update "updatedAt"
    
mongoose.model("Chat", ChatSchema);