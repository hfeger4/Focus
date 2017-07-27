import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    const { currentUser, match} = this.props;
    const photoId = match.params.photoId;
    this.state = {
      body: "",
      user_id: "",
      photo_id: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount(){
    this.props.fetchPhotos();
  }

  handleDelete(e){
    e.preventDefault();
    console.log(this.props);
    this.props.deleteComment(this.props.comment.id);
  }

  render()
  {
    const photoId = this.props.match.params.photoId;
    const photos = this.props.photos;
    const photoArr = photos.filter(photoel => photoel.id === parseInt(photoId));
    const photo = photoArr[0];
    const username = this.props.currentUser.username;
    return(
        <div className="comment-form">
          { photo ? (
            <div>
              <div className="photo-comments">
                <img className="comments-photo" src={ photo.image_url } />
                <div className="comments">
                  <div className="comment-header">Comments</div>
                  {photo.comments.map((comment)=>
                    <div key={comment.id + "comment"}
                      className="individual-comment">
                      {username}:&nbsp;{comment.body}
                    </div>

                  )}
                </div>
              </div>
              <div className="comment-input">Comment:</div>

            </div>
          ) : (
            <h1></h1>
          )}
        </div>
    );
  }

}

export default withRouter(CommentForm);
