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

var emailValidator = [
    validate({
        validator: "isEmail",
        message: "Not a valid email address",
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

const UserSchema = new mongoose.Schema({
    first_name: {
        required: [true, "Name is required"],
        type: String,
        validate: nameValidator,
    },
    last_name: {
        required: [true, "Name is required"],
        type: String,
        validate: nameValidator,
    },
    email: {
        required: [true, "Email is required"],
        type: String,
        validate: emailValidator,
    },
    password: {
        required: [true, "Password is required"],
        type: String,
        validate: passwordValidator,
    },
    messages_sent: {
        type: Number,
    },
    chats_participated: {
        type: Number,
    },
    chats_created: {
        type: Number,
    },
}, { timestamps: true}); // automatically creates "createdAt" & "updatedAt" with ISODate value
// will auto update "updatedAt"
    
mongoose.model("User", UserSchema);