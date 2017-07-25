import { connect } from 'react-redux';
import { selectAllAlbums } from '../../reducers/selectors';
import { fetchUserAlbums } from '../../actions/album_actions';
import AlbumStream from './album_stream';

const mapStateToProps =  (state) => {
  return {albums: selectAllAlbums(state)};

};

const mapDispatchToProps = dispatch => ({
  fetchUserAlbums:(userId) => dispatch(fetchUserAlbums(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumStream);
