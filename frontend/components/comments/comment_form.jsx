import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    const { currentUser, photo } = this.props;
    this.state = {
      body: "",
      user_id: currentUser.id,
      photo_id: ""
    };
    console.log(currentUser);
    console.log(this.props);
  }

  componentWillMount(){
    this.props.fetchComments();
  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render()
  {
    return(
      <div><h1>HELLO</h1></div>
    );
  }

}

export default withRouter(CommentForm);
