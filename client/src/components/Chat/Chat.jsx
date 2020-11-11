import React, { useState, useEffect } from "react"
import queryString from 'query-string'
import io from "socket.io-client"

import {Text} from '../view/Text/Text.jsx';
import {Messages} from '../view/Messages/Messages.jsx';
import {Bar} from '../view/Bar/Bar.jsx'
import {Input} from '../view/Input/Input.jsx';

import './style/Chat.css';

// const ENDPOINT = 'https://project-chat-application.herokuapp.com/';
const ENDPOINT = 'localhost:5000/';
let socket;

export const Chat = ({ location }) => {
  const [name, setName] = useState(''),
    [room, setRoom] = useState(''),
    [users, setUsers] = useState(''),
    [message, setMessage] = useState(''),
    [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', { name, room }, (error) => {
      if(error) alert(error);
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) socket.emit('sendMessage', message, () => setMessage(''));
    
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <Bar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <Text users={users}/>
    </div>
  );
}
