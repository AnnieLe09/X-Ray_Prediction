import React from 'react';
import './css/Navbar.css';

function Navbar() {
  return (
      <nav id='navbar' >
        <section id = 'logo-section'>
            <span>X-Predict</span>
        </section>
        <section id= 'authen-section'>
            <button className='nav-btn login-btn'>Đăng Nhập</button>
            <button className = 'nav-btn signup-btn'>Đăng Ký</button>
        </section>
      </nav>
  );
}

export default Navbar;
