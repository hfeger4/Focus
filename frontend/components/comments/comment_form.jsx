import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    const { currentUser } = this.props;
    this.state = {
      body: "",
      user_id: currentUser.id,
      photo_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render()
  {
  }

}

export default withRouter(CommentForm);
