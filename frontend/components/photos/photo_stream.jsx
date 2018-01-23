import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';
import { RingLoader } from 'react-spinners';

const masonryOptions = {
  // fitWidth: true,
  // stagger: 100,
  gutter: 3,
  // transitionDuration: '0.8s',
  transitionDuration: 0 };

class PhotoStream extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { match, fetchUserPhotos } = this.props;
    this.props.fetchUserPhotos(match.params.userId).then( () =>
      this.setState({ loading: false }));
  }

  render(){
    const {photos} = this.props;
    return (
      <div>
        <div className='sweet-loading'>
          <RingLoader
            size={150}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>
        <h1 className="explore_title">Your Photos</h1>
        <div className="masonry">
          <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            >
            {photos.map( photo => (
              <div  key={photo.id + "photo"}
                    className="single-photo" >
                <Link to={`/photos/${photo.id}`}>
                  <img key={photo.id} src={ photo.image_url }/>
                </Link>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoStream);
