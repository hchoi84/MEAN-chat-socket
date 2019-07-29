const user = require("../controllers/users.js");
const chat = require("../controllers/chats.js");

module.exports = app => {
    // Post
    app.post("/users", (req, res) => { user.createUser(req, res); })
    app.post("/users/login", (req, res) => { user.loginUser(req, res); })

    app.post("/chats", (req, res) => { chat.createRoom(req, res); })
    app.post("/chats/addMessage/:id", (req, res) => { chat.addMessage(req, res); })
    
    // Get
    app.get("/users/:email", (req, res) => { user.findUserByEmail(req, res); })

    app.get("/chats", (req, res) => { chat.getAllChats(req, res); })
    app.get("/chats/:id", (req, res) => { chat.getChatHistory(req, res); })

    // Put

    // Delete
}