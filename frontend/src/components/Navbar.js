import React from 'react';
import './css/Navbar.css';
import '../App.css';

function Navbar() {
  return (
      <nav id='navbar' >
        <a href = '/' className='no-link'><section id = 'logo-section' >
            <span>X-Predict</span>
        </section></a>
        <section id= 'authen-section'>
            <a href='/login'><button className='nav-btn login-btn'>Đăng Nhập</button></a>
            <a href='/signup'><button className = 'nav-btn signup-btn'>Đăng Ký</button></a>
        </section>
      </nav>
  );
}

export default Navbar;
