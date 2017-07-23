import { connect } from 'react-redux';
import { selectPhoto } from '../../reducers/selectors';
import { createPhoto } from '../../actions/photo_actions';
import PhotoUpload from './photo_upload';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createPhoto:(photo) => dispatch(createPhoto(photo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);
