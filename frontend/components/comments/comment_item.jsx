import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class CommentItem extends React.Component{
  constructor(props){
    super(props);
    const { currentUser, match} = this.props;
    const photoId = match.params.photoId;
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

  render(){
    const myuser = this.props.currentUser.id;
    const commentuser = this.props.comment.user_id;

    return (
      <div className="comment-item">
      <div>{this.props.comment.body}</div>
      {myuser === commentuser ? (
        <button onClick={this.handleDelete}>&nbsp;<i className="fa fa-times" aria-hidden="true"></i>
</button>
      ) : ""}

      </div>

    );

  }


}

export default withRouter(CommentItem);
