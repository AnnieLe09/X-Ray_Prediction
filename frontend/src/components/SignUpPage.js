import './css/SignUpPage.css';
import './css/LogInPage.css';
import '../App.css';
import React, { Component } from "react";
import Dropdown from './Dropdown';
import validate from './validateInfo';
import useForm from './useForm';
import Navbar from './Navbar';
import Constants from '../Constants';

function SignUpPage() {
  const tmp = window.sessionStorage.getItem(Constants.userCode);
  const user = JSON.parse(tmp);
  const submitForm = ()=>{
    console.log("Submitted");
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="page">
    <Navbar />
    {user === null &&   <div className="main-container signup-container">
          <form className='signup-form' onSubmit={handleSubmit}>
            <h1 className='signup-title'>Sign Up</h1>
            <div className='form-inputs2'>
              <label className='form-label2'>Username</label>
              <input className='form-input2' type='text' placeholder='Enter username' name='username' value={values.username}
            onChange={handleChange}/>
            </div>
            <div className='form-inputs2'>
              <label className='form-label2'>Password</label>
              <input className='form-input2' type='password' placeholder='Enter password' name='password' value={values.password}
            onChange={handleChange}/>
            </div>
            <div className='form-inputs2'>
              <label className='form-label2'>Confirm</label>
              <input className='form-input2' type='password' placeholder='Enter password' name='password2' value={values.password2}
            onChange={handleChange}/>
            </div>
           
            <div className='signup-area2'>
              <button className='form-input-btn22'>Sign Up</button>
              <a href="/login">Already have account?</a>
            </div>
         </form>
       </div>}
       {user !== null && <h1>Page not found</h1>}
    </div>
  );
}

export default SignUpPage;