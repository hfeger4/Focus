import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';

class PhotosIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }

  render(){
    const {photos} = this.props;

    return (
      <div className="masonry">
        <Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={{transitionDuration: 0}}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          {photos.map( photo => (
            <div  key={photo.id + "photo"} className="single-photo" >
              <Link to={`/photos/${photo.id}`}>
                <img key={photo.id} src={ photo.image_url }/>
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
    );
  }
}

export default withRouter(PhotosIndex);