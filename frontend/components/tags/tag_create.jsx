import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class TagCreate extends React.Component{
  constructor(props){
    super(props);
    const { currentUser, match} = this.props;
    const photoId = match.params.photoId;
    this.state = {
      name: "",
      photo_id: ""
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
    if (this.state.body){
      this.props.createTag(this.state)
      .then(this.setState({name: ""}));
    }
  }

  render()
  {

    return(
      <form onSubmit={this.handleSubmit}>
      <input className="text-area"
        type="text"
        placeholder="Add a comment"
        value={this.state.body}
        onChange={this.update('name')}
        />
      <input className="new-comment-s" type='submit' value="New Tag"/>
      </form>
    );
  }

}


export default withRouter(TagCreate);
