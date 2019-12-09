const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3100;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is up an running");
});

io.on("connection", socket => {
  console.log("user joined");

  socket.join("chatroom");

  socket.on("disconnect", () => {
    console.log(`user has left, ${socket.id}`);
  });

  socket.on("sendMsg", (data, cb) => {
    console.log(data);
    io.to("chatroom").emit("newMsg", data);
    cb();
  });
});
