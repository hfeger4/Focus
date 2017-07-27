import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import CommentItem from './comment_item';
import CommentCreateContainer from './comment_create_container';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.photoId= this.props.match.params.photoId;
  }

  componentWillMount(){
    this.props.fetchPhoto(this.props.match.params.photoId);
    this.props.fetchComments(this.props.match.params.photoId);
  }



  render()
  {
    return(
      <div className="comment-form">
        <img src={this.props.photo.image_url} className="comments-photo"></img>
      <div className="photo-comments">
        <div>
            <div className="all-comments">
               {this.props.comments.length > 0 ? this.props.comments.map((comment) => (
                 <CommentItem currentUser={this.props.currentUser} deleteComment={this.props.deleteComment} key={comment.id + "comment"} comment={comment} />)) : ("")}
            </div>
            <div>
            <CommentCreateContainer photo={this.props.photo} createComment={this.props.createComment}/>
            </div>
        </div>
      </div>
      </div>

    );
  }

}

export default withRouter(CommentForm);
