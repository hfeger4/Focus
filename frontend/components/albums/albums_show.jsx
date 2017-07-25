import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';

class AlbumShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      user_id: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.getAlbum(this.props.match.params.id);
  }

  handleDelete(e){
    e.preventDefault();
    if(confirm("Are you sure you want to delete this album?")){
      this.props.deleteAlbum(this.props.album.id);
      this.props.history.push('/albums');
    }
  }

  render(){
    const {photo} = this.props;
    const {title, body, user, id} = this.props.photo;
    return (
        <div className="album-show-page">
          <h1>{title}</h1>


        </div>
    );
  }
}

export default withRouter(AlbumShow);
