import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Join.css'

export const Join = () => {
    const [ name, setName ] = useState(''),
        [ room, setRoom ] = useState(''),
        handleChangeName = ev => setName(ev.target.value),
        handleChangeRoom = ev => setRoom(ev.target.value),
        handleLinkClick = ev => (!name || !room) ? ev.preventDefault() : null;
    
    return (
        <div className='join-container'>
            <div className='join-inner-container'>
                <h1 className='heading'> Join </h1>
                <div>
                    <input placeholder='Name' className='join-input' type='text' required onChange={handleChangeName}/>
                </div>
                <div>
                    <input placeholder='Room' className='join-input mt-20' type='text' required onChange={handleChangeRoom} />
                </div>
                <Link onClick={handleLinkClick} to={`/chat?neme=${name}&room=${room}`}>
                    <button className='join-btn mt-20'> Join </button>
                </Link>
                <div className='line-bottom'/>
            </div>
        </div>
    )
}