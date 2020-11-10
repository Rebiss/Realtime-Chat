const express = require('express');
const socket = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socket(server)

const PORT = process.env.PORT || 3011;

server.listen(PORT, () => console.log(`Server is runing ${PORT}`))