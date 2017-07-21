import { connect } from 'react-redux';
import { selectPhoto } from '../../reducers/selectors';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mapStateToProps =  (state, props) => ({
  photo: selectPhoto(state, props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto:(id) => dispatch(fetchPhoto(id)),
  deletePhoto:(id) => dispatch(deletePhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
