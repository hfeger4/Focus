import { connect } from 'react-redux';
import { selectPhoto, selectAllAlbums } from '../../reducers/selectors';
import { fetchPhoto, deletePhoto, updatePhoto} from '../../actions/photo_actions';
import { fetchUserAlbums } from '../../actions/album_actions';
import PhotoShow from './photo_show';

const mapStateToProps =  (state, props) => ({
  photo: selectPhoto(state, props.match.params.id),
  albums: selectAllAlbums(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto:(id) => dispatch(fetchPhoto(id)),
  deletePhoto:(id) => dispatch(deletePhoto(id)),
  updatePhoto:(photo) => dispatch(updatePhoto(photo)),
  fetchUserAlbums:(userId) => dispatch(fetchUserAlbums(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
