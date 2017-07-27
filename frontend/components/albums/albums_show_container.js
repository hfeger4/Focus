import { connect } from 'react-redux';
import { selectAlbum } from '../../reducers/selectors';
import { fetchAlbum, deleteAlbum } from '../../actions/album_actions';
import AlbumShow from './albums_show';

const mapStateToProps =  (state, props) => ({
  album: selectAlbum(state, props.match.params.id),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchAlbum:(id) => dispatch(fetchAlbum(id)),
  deleteAlbum:(id) => dispatch(deleteAlbum(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
