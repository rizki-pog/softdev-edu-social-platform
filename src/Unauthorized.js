import React from 'react';
import { Link } from 'react-router-dom';
import './Unauthorized.scss';

const Unauthorized = () => {
  return (
    <div className='container'>
      <div class="gandalf">
        <div class="fireball"></div>
        <div class="skirt"></div>
        <div class="sleeves"></div>
        <div class="shoulders">
          <div class="hand left"></div>
          <div class="hand right"></div>
        </div>
        <div class="head">
          <div class="hair"></div>
          <div class="beard"></div>
        </div>
      </div>
      <div class="message">
        <h2>403 - You Shall Not Pass. The following page is only for adminstrators</h2>
        
      </div>
      <p><Link to='/announcement-login'>If you have admin permissions, click here to login</Link></p>
    </div>
  )
}

export default Unauthorized;