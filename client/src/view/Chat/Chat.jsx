import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {Bar} from '../Bar/Bar.jsx'
import {Messages} from '../Messages/Messages.js'
import {Input} from '../Input/Input.js'
import {TextContainer} from '../TextContainer/TextContainer.js'

import {REACT_APP_URL} from '../../config/cfg.js'
import './style/Chat.css'

let socket;

export const Chat = ({ location }) => {
    const [ name, setName ] = useState(''),
        [ room, setRoom ] = useState(''),
        [message, setMessage] = useState(''),
        [messages, setMessages] = useState([]),
        [users, setUsers] = useState(''),
        ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);  
        socket.emit('join', { name, room }, error => {
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

    const sendMessage = ev => {
        ev.preventDefault();
        if(message) socket.emit('sendMessage', message, () => setMessage(''));
    }

    return  (
        <div className="outer-container">
            <div className="chat-container">
                <Bar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users}/>
        </div>
    ); 
}