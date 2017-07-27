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
    this.props.fetchAlbum(this.props.match.params.id);
  }

  handleDelete(e){
    e.preventDefault();
    if(confirm("Are you sure you want to delete this album?")){
      this.props.deleteAlbum(this.props.album.id);
      this.props.history.push(`/users/${this.props.currentUser.id}/albums`);
    }
  }

  render(){
    const {album} = this.props;
    const {title, body, user, id, photos} = this.props.album;
    return (
        <div className="album-show-page">
          <div>
            <h1 className="album-h1">{title}</h1>
          </div>
          <ul className="album-show-page2">

            { photos !== undefined ? photos.map((photo) => (
              <div key={photo.id + "photo"} className="album-photo">
                <Link to={`/photos/${photo.id}`}>
                  <img src={ photo.image_url } />
                </Link>
              </div>
            )) : ""}
          </ul>
          <button className="create-album"
            onClick={this.handleDelete}>
            Delete
          </button>
        </div>
    );
  }
}

export default withRouter(AlbumShow);
