import React from 'react';
import online from '../icons/online.png';
import close from '../icons/close.png';
import './style/Bar.css';

export const Bar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={online} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={close} alt="close icon" /></a>
    </div>
  </div>
);
