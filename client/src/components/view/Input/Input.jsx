import React from 'react';
import './style/Input.css';

export const Input = ({ setMessage, sendMessage, message }) => {    
  const handleChangeInput = ({ target: { value } }) => setMessage(value),
    handleKeyPress = ev => ev.key === 'Enter' ? sendMessage(ev) : null,
    handleSendBtn = ev => sendMessage(ev);

  return (
      <form className="form">
          <input className="input" type="text" placeholder="message ..." 
            value={message}
            onChange={handleChangeInput}
            onKeyPress={handleKeyPress}
          />
          <button className="sendButton" onClick={handleSendBtn}>
            <span className='send-icon'>
              <i class="fas fa-paper-plane"></i>
            </span>
          </button>
      </form>
  )
}
