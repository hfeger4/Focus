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
    if (this.state.name === ""){

    }else{
      this.setState({photo_id: this.props.photo.id});
      this.props.createTag(this.state);
    }
    this.state.name = "";

  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return(
      <div className="add-tag-bar">
        <form onSubmit={this.handleSubmit}>

          <input type="text"
                  onChange={this.update("name")}
                  value={this.state.name}
                  placeholder=" Add a unique tag">
          </input>
          <input className="enter-bar" type="submit" value="Enter"></input>
        </form>
      </div>

    );
  }

}

export default withRouter(TagIndex);
