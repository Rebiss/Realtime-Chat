import React from 'react';
import close from '../icons/close.png';
import './style/Bar.css';

export const Bar = ({ room }) => (
  <div className="info-room-user">
    <div className="left-inner-container">
      <span className="online-icon blink">
        <i class="far fa-dot-circle"></i>
      </span>
      {/* <h3 className='room-info'>{room}</h3> */}
    </div>
    <div className="right-inner-container">

      <span className="close-icon">
        <i class="fas fa-times-circle"></i>
      </span>
      {/* <a href="/"><img src={close} alt="close icon" /></a> */}
    </div>
  </div>
);
