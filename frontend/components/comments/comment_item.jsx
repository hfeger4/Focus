import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class CommentItem extends React.Component{
  constructor(props){
    super(props);
    const { currentUser, match} = this.props;
    const photoId = match.params.photoId;
    console.log(photoId);
    this.photoId= match.params.photoId;
    this.state = {
      body: "",
      user_id: "",
      photo_id: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault;
    if(confirm("Are you sure you want to delete this comment?")){
      this.props.deleteComment(this.props.comment.id);
    }
  }

  render()
  {
    return (
      <div>
      <div>{this.props.comment.body}</div>
      <button onClick={this.handleDelete}>Delete</button>
      </div>

    );

  }


}

export default withRouter(CommentItem);
