import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="header">
    <Link to='/' className='logo-text'><h1>Focus Home Icon</h1></Link>
    <div className="login-signup">
      <Link className="auth-buttons" to="/login">Login</Link>
      <br />
      <Link className="auth-buttons" to="/signup">Sign up!</Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup>
    <h2>Hi there, {currentUser.username}!</h2>
    <button onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
