import React from 'react';
import './css/Navbar.css';
import '../App.css';
import Profile from './Profile';

function Navbar() {
  const tmp = window.sessionStorage.getItem("user19120000");
  const user = JSON.parse(tmp); 
  const LogoutListener = (event) => {
    window.sessionStorage.removeItem("user19120000");
  }
  return (
      <nav id='navbar' >
        <a href = '/' className='no-link'><section id = 'logo-section' >
            <span>X-Predict</span>
        </section></a>
        {user === null &&
        <section id= 'authen-section'>
            <a href='/login'><button className='nav-btn signup-btn'>Log In</button></a>
            <a href='/signup'><button className = 'nav-btn signup-btn'>Sign Up</button></a>
        </section>
        }
        {(user !== null) && <section id= 'authen-section'>
            <a href='/search'><button className='nav-btn signup-btn'>Search</button></a>
            <a href='/history'><button className='nav-btn signup-btn'>History</button></a>
            <a href='/'><button className = 'nav-btn signup-btn' onClick={LogoutListener}>Sign Out</button></a>
        </section>}
      </nav>
  );
}

export default Navbar;
