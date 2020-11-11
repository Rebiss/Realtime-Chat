import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './style/Join.css';

export const Join = () => {
  const [name, setName] = useState(''),
    [room, setRoom] = useState(''),
    handleChangeName = ev => setName(ev.target.value),
    handleChangeRoom = ev => setRoom(ev.target.value),
    handleClickLink = ev => (!name || !room) ? ev.preventDefault() : null;

  return (
    <div className="join-container">
      <div className="join-inner-container">
        <div>
          <input placeholder="Name" className="join-input" type="text" onChange={handleChangeName} />
        </div>
        <div>
          <input placeholder="Room" className="join-input mt-20" type="text" onChange={handleChangeRoom} />
        </div>
        <Link onClick={handleClickLink} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">
            <span className='join-icon'>
              <i class="fas fa-sign-in-alt"></i>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
