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



// const { photos } = this.props;
// const photoItems = photos.map(photo => (
//   <div key={photo.id}>
//   <img src={ photo.image_url }/>
//   </div>


// render(){
//   const { photos } = this.props;
//   return(
//     <div className="photo-index">
//       <div className="photo-items">
//         {photos.map( photo => (
//           <div key={photo.id} className="single-photo">
//             <img src={ photo.image_url }/>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
//   }
// }

  render(){
    const {photos} = this.props;
    // const photoItems = photos.map(photo => (
    //   <div key={photo.id}>
    //     <img src={ photo.image_url }/>
    //   </div>
    // ));
    photos.map(photo => (
      console.log(photo.id)
    ));

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

export default withRouter(PhotosIndex);
