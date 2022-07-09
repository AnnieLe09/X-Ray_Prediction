import React from 'react';
import './css/LogInPage.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Constants from '../Constants';
import Navbar from './Navbar';

function LogInPage() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    const tmp = window.sessionStorage.getItem(Constants.userCode);
    const user = JSON.parse(tmp);
    const onHandleSubmit = (user) => {
      const data = new FormData();
      data.append('username', user.username);
      data.append('password', user.password);
      fetch(Constants.serverLink + 'login', {
        method:"POST",
        body: data
      }).then(res=>res.json()).then((res) => {

        const { code, user } = res;
        console.log(res);
        if (code === Constants.login.SUCCESS_CODE) {
          window.sessionStorage.setItem(Constants.userCode, JSON.stringify(user));
          window.sessionStorage.setItem("isLogin", "true");
          navigate('/');
        }
        else if (code === Constants.login.FAILURE_CODE) {
          alert("Wrong username or password!");
        }
      })
      .catch((err) => console.log(err));
    }
  return (
    <div className="page">
    <Navbar />
    {user === null &&  <div className='main-container login-container'>
        <form className='form' onSubmit={handleSubmit(onHandleSubmit)}>
          <h1 className='login-title'>Log In</h1>
          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input className='form-input' type='text' placeholder='Enter your username' name='username' {...register('username', { required: true })} />
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input className='form-input' type='password' placeholder='Enter your password' name='password' {...register('password', { required: true })} />
          </div>
          <div className='login-btns'>
            <button className='login-btn' type='submit'>Log In</button>
            <Link className='no-link signup-btn' to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>}
     {user !== null && <h1>Page not found</h1>}
      </div>
  );
}

export default LogInPage;
