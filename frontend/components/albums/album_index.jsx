import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  // fitWidth: true,
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.8s' };

class AlbumsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchAlbums();
  }

  render(){
    const {albums} = this.props;

    return (

      <div className="masonry">
        <Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          Hello
        </Masonry>
      </div>
    );
  }
}

export default withRouter(AlbumsIndex);
