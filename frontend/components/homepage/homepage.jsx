import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Homepage extends React.Component{
  constructor(props){
    super(props);

    this.handleGuestSignIn = this.handleGuestSignIn.bind(this);
  }



  handleGuestSignIn(e){
    e.preventDefault();
      let name = "Guest";
      let password = "password";
      for (let i = 0; i < name.length; i++) {
        setTimeout(() => this.setState({
          username: name.slice(0, i + 1)}), (i * 80));
      }
      for (let j = 0; j < password.length; j++) {
        setTimeout(() => this.setState({
          password: password.slice(0, j + 1)}), ((j + 5) * 80));
      }
      const user = {
        username: 'Guest',
        password: 'password'
      };
      setTimeout(() => this.props.login({user}), 1500);
    }

  render(){

    return (
      <div className="homepage-container">
        <div className="center-message">
          <div className="greeting-message">Find your passion.</div>
          <div className="greeting-message2">Join the Focus community, save your memories</div>
          <div className="greeting-message2">and share them with the world.</div>
          <div className="get-started-spacer">
          <Link className="get-started-button" to="/login">Get Started</Link>
          </div>
        </div>
        <div className="footer-div">
        <div className="footer">
          <div className="footer-icons">
            <Link to='/'><i className="fa fa-camera-retro fa-2x"></i></Link>
          </div>
          <div className="footer-icons">
            <i className="fa fa-home fa-2x" aria-hidden="true"></i>

          </div>
          <div className="footer-icons">
            <a target="_blank" href="https://github.com/hfeger4">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </div>
          <div className="footer-icons">
            <a target="_blank" href="http://linkedin.com/in/howardfeger4">
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Homepage);
