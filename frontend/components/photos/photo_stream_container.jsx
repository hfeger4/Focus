import { connect } from 'react-redux';
import { selectAllPhotos } from '../../reducers/selectors';
import { fetchUserPhotos } from '../../actions/photo_actions';
import PhotoStream from './photo_stream';

const mapStateToProps =  (state) => {
  return {photos: selectAllPhotos(state)};

};

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos:(userId) => dispatch(fetchUserPhotos(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoStream);
