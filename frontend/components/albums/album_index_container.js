import { connect } from 'react-redux';
import { selectAllAlbums } from '../../reducers/selectors';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchUserPhotos } from '../../actions/photo_actions';
import AlbumsIndex from './album_index';

const mapStateToProps =  (state) => {
  return {albums: selectAllAlbums(state)};

};

const mapDispatchToProps = dispatch => ({
  fetchAlbums:() => dispatch(fetchAlbums()),
  fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsIndex);
