import React from 'react';
import ReactDOM from 'react-dom';

import {login, signup, logout} from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Focus</h1>, root);

  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
