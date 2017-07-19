import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="header">
    <Link to='/'><h1 className='logo-text'>Focus</h1></Link>
    <div className="login-signup">
      <Link className="auth-buttons" to="/login">Login</Link>
      <br />
      <Link className="sign-up-button" to="/signup">Sign up</Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<nav className="header">
    <Link to='/'><h1 className='logo-text'>Focus</h1></Link>
    <h2>Welcome, {currentUser.username}!</h2>
    <button className="sign-up-button" onClick={logout}>Log Out</button>
	</nav>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
