import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class CommentCreate extends React.Component{
  constructor(props){
    super(props);
    const { currentUser, match} = this.props;
    const photoId = match.params.photoId;
    this.state = {
      body: "",
      photo_id: photoId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.state);
  }


  render()
  {

    return(
      <form onSubmit={this.handleSubmit}>
      <textarea className=""
        type="text"
        placeholder="Add a comment"
        value={this.state.body}
        onChange={this.update('body')}
        />
      <input type='submit' value="New Comment"/>
      </form>
    );
  }

}

export default withRouter(CommentCreate);
