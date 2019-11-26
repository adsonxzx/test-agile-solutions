import React from 'react';
import './style.css';
import imageUser from '../../assets/user.png';

export default () => (
  <header>
    <span className="menu">Menu</span>
    <div className="content">
      <div className="user-avatar">
        <img src={imageUser} alt=""/>
        <span>Adson Souza</span>
      </div>
      <span>Sales Report</span>
    </div>
  </header>
)

