import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';

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
    <div className="album-page">
      <div className="albums">
        <div  className="header-albums">
          <h1>Albums</h1>
        </div>
          {albums.map( album => (
            <div  key={album.id + "album"} className="single-album" >
              <Link to={`/albums/${album.id}`}>
                <h1>{ album.title }</h1>
              </Link>
          </div>
          ))}
      </div>
    </div>
    );
  }
}

export default withRouter(AlbumStream);
