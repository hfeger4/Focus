import { connect } from 'react-redux';
import { selectAllTags, selectPhoto} from '../../reducers/selectors';
import { createTag, deleteTag, fetchTags, } from '../../actions/tag_actions';
import TagForm from './tag_form';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, props) => ({
  currentUser: state.session.currentUser,
  photo: selectPhoto(state, props.match.params.photoId),
  tags: selectAllTags(state)
});

const mapDispatchToProps = (dispatch) => ({
  createTag:(tag) => dispatch(createTag(tag)),
  deleteTag:(id) => dispatch(deleteTag(id)),
  fetchTags:(tags) => dispatch(fetchTags(tags)),
  fetchPhoto:(id) => dispatch(fetchPhoto(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
