import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';

class HomepageIndex extends React.Component{
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
              <img key={photo.id} src={ photo.image_url }/>
            </div>
          ))}
        </Masonry>
      </div>
    );
  }
}

export default withRouter(HomepageIndex);







// <div className="footer">
//   <div className="footer-icons">
//     <Link to='/'><i className="fa fa-camera-retro fa-2x"></i></Link>
//   </div>
//   <div className="footer-icons">
//     <i className="fa fa-home fa-2x" aria-hidden="true"></i>
//
//   </div>
//   <div className="footer-icons">
//     <a href="https://github.com/hfeger4">
//     <i className="fa fa-github fa-2x" aria-hidden="true"></i>
//     </a>
//   </div>
//   <div className="footer-icons">
//     <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
//   </div>
// </div>
