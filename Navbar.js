import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const loginStatus = ()=>{
    
  }
  return (
    <div className='navbar'>
        <img src='logo.jpg' alt='' />
        <ul className='nav-menu'>
            <Link to ='/signUp'>
            <li>SignUp</li> </Link>
            <Link to ='/signIn'>
            <li>SignIn</li> </Link>
            <Link to ='/profile'>
            <li>Profile</li> </Link>
            <Link to="/createPost">
              Create Post
            </Link>
            
        </ul>
    </div>
  )
}
