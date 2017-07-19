import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSignIn = this.handleGuestSignIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleGuestSignIn(e){
    e.preventDefault();
    const user = {
      username: 'Guest',
      password: 'password'
    };
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Welcome to Focus</h1>
          <br/>
          <div className="errors">
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          </div>
          <div className="login-form">
            <br/>
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            <br/>
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br/>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
          <input className="demo-button" type="submit" value="Guest Login" onClick={this.handleGuestSignIn} />
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
