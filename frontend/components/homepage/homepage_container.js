import { connect } from 'react-redux';
import { selectAllPhotos } from '../../reducers/selectors';
import { fetchPhotos } from '../../actions/photo_actions';
import HomepageIndex from './homepage_index';

const mapStateToProps =  (state) => {
  return {photos: selectAllPhotos(state)};
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos:() => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageIndex);
