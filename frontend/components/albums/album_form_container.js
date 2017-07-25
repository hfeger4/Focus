import { connect } from 'react-redux';
import { selectAlbum } from '../../reducers/selectors';
import { createAlbum } from '../../actions/album_actions';
import AlbumCreate from './album_form';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createAlbum:(album) => dispatch(createAlbum(album)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumCreate);
