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
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading"></h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={handleChangeName} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={handleChangeRoom} />
        </div>
        <Link onClick={handleClickLink} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit"> Join </button>
        </Link>
      </div>
    </div>
  );
}
