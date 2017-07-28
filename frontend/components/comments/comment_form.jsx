import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import CommentItem from './comment_item';
import CommentCreateContainer from './comment_create_container';
import TagIndexContainer from '../tags/tag_index_container';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.photoId= this.props.match.params.photoId;
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount(){
    this.props.fetchPhoto(this.props.match.params.photoId);
    this.props.fetchComments(this.props.match.params.photoId);
    this.props.fetchTags(this.props.match.params.photoId);
  }

  displayTags(){
  const tagsIdx =  this.props.tags.map((tag) => (
    <li>{tag.name} <button value={tag.id} onClick={this.handleDelete}>Delete Tag</button></li>

  ));
  return tagsIdx;
  }

  handleDelete(e){
    e.preventDefault;
    if(confirm("Are you sure you want to delete this comment?")){
      this.props.deleteTag(e.target.value);
    }
  }


  render()
  {
    console.log(this.props);
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
        <TagIndexContainer/>
        {this.displayTags()}
      </div>
      </div>

    );
  }

}

export default withRouter(CommentForm);
