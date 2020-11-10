const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const router = require('./router/router.js');
const { addUser, removeUser , getUser, getUsersInRoom } = require('./helpers/user.js')

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
    socket.on('join', ({name, room}, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if(error) callback(error);

        socket.emit('message', {user: 'root', text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', {user: 'root', text: `${user.name}, hase joined`})

        socket.join(user.room);
        callback();
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message})

        callback();
    });

    socket.on('disconnect', () => {
        console.log('DisConnect !!!')
    }) 
})
app.use(cors());
app.use(router);

server.listen(PORT, () => console.log(`Server is runing in ${PORT}`))