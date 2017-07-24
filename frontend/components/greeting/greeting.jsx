import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="header">
    <div className="icon-focus">
      <Link to='/'><h1 className='logo-text'>focus</h1></Link>
      <Link to='/'><i className="fa fa-camera-retro fa-2x"></i></Link>
    </div>
    <div className="login-signup">
      <Link className="login-button" to="/login">Log in</Link>
      <br />
      <Link className="sign-up-button" to="/signup">Sign up</Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<nav className="header">
    <div className="icon-focus">
      <Link to='/'><h1 className='logo-text'>focus</h1></Link>
      <Link to='/'><i className="fa fa-camera-retro fa-2x"></i></Link>
    </div>
    <h2></h2>
    <div className="login-signup">
      <Link className="login-button" to='/photos'>Photos</Link>
      <Link className="login-button" to='/upload'>
        <i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
      </Link>
      <button className="sign-up-button" onClick={logout}>Log Out</button>
    </div>
	</nav>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
