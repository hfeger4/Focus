import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class PhotosIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchPhotos();
  }

  render(){
    const { photos } = this.props;
    const photoItems = photos.map(photo => (
      <img src={photo.image_url}/>
    ));
    return(
      <div>
        {photoItems}
      </div>
    );
  }
}

export default withRouter(PhotosIndex);
