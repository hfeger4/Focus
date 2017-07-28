import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import TagIndexContainer from './tag_index';

class TagIndex extends React.Component{
  constructor(props){
    super(props);
    const { currentUser, match} = this.props;
    const photoId = match.params.photoId;
    this.state={
      name: "",
      photo_id: photoId
    };
    this.photoId = this.props.match.params.photoId;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount(){
    this.props.fetchPhoto(this.props.match.params.photoId);
    this.props.fetchTags(this.props.match.params.photoId);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({photo_id: this.props.photo.id});
    this.props.createTag(this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return(
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>

          <input type="text"
                  onChange={this.update("name")}
                  value={this.state.name}
                  placeholder="Add a tag">
          </input>
          <input type="submit" value="Add Tag"></input>
        </form>
      </div>

    );
  }

}

export default withRouter(TagIndex);
