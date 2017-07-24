import { connect } from 'react-redux';
import { selectAllPhotos } from '../../reducers/selectors';
import { fetchAlbums } from '../../actions/album_actions';
import AlbumsIndex from './album_index';

const mapStateToProps =  (state) => {
  return {albums: selectAllPhotos(state)};

};

const mapDispatchToProps = dispatch => ({
  fetchAlbums:() => dispatch(fetchAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsIndex);
