import { connect } from 'react-redux';
import { selectAllPhotos, selectComment, selectPhoto } from '../../reducers/selectors';
import { createComment, deleteComment, fetchComment, fetchComments } from '../../actions/comment_actions';
import CommentForm from './comment_form';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, props) => ({
  currentUser: state.session.currentUser,
  photos: selectAllPhotos(state),
  photo: selectPhoto(state, props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  createComment:(comment) => dispatch(createComment(comment)),
  deleteComment:(id) => dispatch(deleteComment(id)),
  fetchComment:(id) => dispatch(fetchComment(id)),
  fetchComments:(comments) => dispatch(fetchComments(comments)),
  fetchPhoto:(id) => dispatch(fetchPhoto(id)),
  fetchPhotos:() => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
