import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div className="main-body">
    <header>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <div className="footer">
      <div className="footer-icons">
        <Link to='/'><i className="fa fa-camera-retro fa-2x"></i></Link>
      </div>
      <div className="footer-icons">
        <i className="fa fa-home fa-2x" aria-hidden="true"></i>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/hfeger4">
        <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
      </div>
      <div className="footer-icons">
        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  </div>
);

export default App;
