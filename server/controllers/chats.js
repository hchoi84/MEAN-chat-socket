const mongoose = require("mongoose");
const Chat = mongoose.model("Chat");
var bcrypt = require("bcrypt");

module.exports = {
    createRoom: (req, res) => {
        var chat = new Chat({
            name: req.body.name,
        });
        chat.save(err => {
            if (err){
                console.log("createRoom FAILED!", err);
                res.json();
            }else{
                console.log("createRoom SUCCESS!");
                res.json(chat);
            }
        });
    },

    getAllChats: (req, res) => {
        Chat.find({}, (err, chats) => {
            res.json(chats);
        });
    },

    addMessage: (req, res) => {
        Chat.findByIdAndUpdate(req.params.id, {$push: {messages: req.body}}, (err, chat) => {
            res.json(chat);
        });
    },

    getChatHistory: (req, res) => {
        Chat.findById(req.params.id, (err, chat) => {
            res.json(chat);
        })
    }

}