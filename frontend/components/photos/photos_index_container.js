import { connect } from 'react-redux';
import { selectAllPhotos } from '../../reducers/selectors';
import { fetchPhotos } from '../../actions/photo_actions';
import PhotosIndex from './photos_index';

const mapStateToProps =  (state) => {
  console.log(state);
  return {photos: selectAllPhotos(state)};

};

const mapDispatchToProps = dispatch => ({
  fetchPhotos:() => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosIndex);
