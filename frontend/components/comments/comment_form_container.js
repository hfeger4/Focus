import { connect } from 'react-redux';
import { selectAllPhotos, selectComment, selectPhoto, selectAllComments, selectAllTags} from '../../reducers/selectors';
import { createComment, deleteComment, fetchComment, fetchComments } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';
import {fetchTags, deleteTag} from '../../actions/tag_actions';


const mapStateToProps = (state, props) => ({
  currentUser: state.session.currentUser,
  photo: selectPhoto(state, props.match.params.photoId),
  comments: selectAllComments(state),
  tags: selectAllTags(state)
});

const mapDispatchToProps = (dispatch) => ({
  createComment:(comment) => dispatch(createComment(comment)),
  deleteComment:(id) => dispatch(deleteComment(id)),
  fetchComment:(id) => dispatch(fetchComment(id)),
  fetchComments:(comments) => dispatch(fetchComments(comments)),
  fetchPhoto:(id) => dispatch(fetchPhoto(id)),
  fetchTags:(photoId) => dispatch(fetchTags(photoId)),
  deleteTag:(tag) => dispatch(deleteTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
