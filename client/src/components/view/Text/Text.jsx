import React from 'react';

import online from '../icons/online.png';
import './style/Text.css';

export const Text = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={online}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);