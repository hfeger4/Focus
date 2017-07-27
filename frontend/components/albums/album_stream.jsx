import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';
import AlbumFormContainer from './album_form_container';

const masonryOptions = {
  // fitWidth: true,
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.8s' };

class AlbumStream extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const { match, fetchUserAlbums } = this.props;
    this.props.fetchUserAlbums(match.params.userId);
  }

  render(){
    const {albums} = this.props;

    return (
  <div className="album-stream">
      <div className="albums">
        <div className="album-and-title">
          <div className="album-font">Welcome to your Albums!</div>
          <div className="album-font">Create and view albums here.</div>
          <div  className="header-albums">
            <div className="album-font">Albums</div>
          </div>
          <div className="album-list">
            {albums.map( album => (
              <div  key={album.id + "album"}>
                <Link to={`/albums/${album.id}`}>
                  <button className="single-album" >{ album.title }</button>
                </Link>
            </div>
            ))}
          </div>
          </div>
    </div>
        <AlbumFormContainer/>
    </div>

    );
  }
}

export default withRouter(AlbumStream);
