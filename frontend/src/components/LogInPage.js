import React from 'react';
import './css/LogInPage.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogInPage() {
    const { register, handleSubmit, errors } = useForm();
    const navigate = useNavigate();
    
    const onHandleSubmit = (data) => {
      console.log(data);
      axios.post("http://localhost:8000/users/login", data).then(res => {
        const { isLogin, user } = res.data;
        console.log(res.data);
        if (isLogin === 1) {
          window.sessionStorage.setItem("user19120000", JSON.stringify(user));
          window.sessionStorage.setItem("isLogin", "true");
          navigate('/');
        }
        else if (isLogin === 2) {
          alert("Không tồn tại tên đăng nhập!");
        }
        else {
          alert("Sai mật khẩu!");
        }
      });
    }
  return (
      <div className='main-container login-container'>
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
      </div>
  );
}

export default LogInPage;
