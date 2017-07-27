import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import TagFormContainer from './tag_form';

class TagForm extends React.Component{
  constructor(props){
    super(props);
    this.photoId = this.props.match.params.photoId;
  }

  componentWillMount(){
    this.props.fetchPhoto(this.props.match.params.photoId);
    this.props.fetchTags(this.props.match.params.photoId);
  }

  render()
  {
    return(
      <div className="comment-form">

      </div>

    );
  }

}

export default withRouter(TagForm);
