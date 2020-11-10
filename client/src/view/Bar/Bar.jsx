import React from 'react';
import './style/Bar.css'

import online from '../../assets/Icons/online.png';
import close from '../../assets/Icons/close.png';

export const Bar = ({ room }) => {
    return (
        <div className="bar">
        <div className="left-inner-container">
            <img className="online-icon" src={online} alt="online" />
            <h3>{room}</h3>
        </div>
        <div className="right-inner-container">
            <a href="/"><img src={close} alt="offline" /></a>
        </div>
    </div>
    )
}