import { connect } from 'react-redux';
import { selectAllPhotos, selectComment} from '../../reducers/selectors';
import { createTag} from '../../actions/tag_actions';
import CommentCreate from './comment_create';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state) => ({
  tag: state.tag
});

const mapDispatchToProps = (dispatch) => ({
  createTag:(tag) => dispatch(createTag(tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentCreate);
