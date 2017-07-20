import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
  position        : 'fixed',
  top             : 0,
  left            : 0,
  right           : 0,
  bottom          : 0,
  backgroundColor : 'rgba(0, 0, 0, 0.8)',
  zIndex          : 10
},
content : {
  position                   : 'fixed',
  height: "400px",
  width: "250px",
  top                        : '50%',
  left                       : '50%',
  border                     : '1px solid black',
  "transform"                : 'translate(-50%, -50%)',
  padding                    : '36px',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  outline                    : 'none',
  borderRadius               : '3px',
  zIndex          : 11,
  opacity         : 100,
  transition      : 'opacity 0.5s'
}
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSignIn = this.handleGuestSignIn.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
   this.setState({modalIsOpen: false});
   this.props.history.push('/');
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
    this.props.login({user});
    // this.props.history.push("/");
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <div className="choice">New to Focus?<Link to="/signup" className="instead-button"> Sign up</Link></div>;
    } else {
      return <div className="choice">Already have an account?<Link to="/login" className="instead-button"> Log in</Link></div>;
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
    if (this.state.modalIsOpen === undefined){
      this.openModal();
    }
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal">

      <div className="login-form-container">
        <div className="login-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Welcome</h1>
          <br/>
          <div className="errors">
          Please {this.props.formType}
          {this.renderErrors()}
          </div>
          <div className="login-form">
            <br/>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
          <input className="demo-button" type="submit" value="Guest Login" onClick={this.handleGuestSignIn} />
           <div className="instead">{this.navLink()}</div>
        </form>
        </div>
      </div>
      </Modal>
    );
  }
}

export default withRouter(SessionForm);
