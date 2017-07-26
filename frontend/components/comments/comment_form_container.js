import { connect } from 'react-redux';
import { selectAllComments, selectComment } from '../../reducers/selectors';
import { createComment, deleteComment, fetchComment, fetchComments } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  comments: selectAllComments(state),

});

const mapDispatchToProps = (dispatch) => ({
  createComment:(comment) => dispatch(createComment(comment)),
  deleteComment:(id) => dispatch(deleteComment(id)),
  fetchComment:(id) => dispatch(fetchComment(id)),
  fetchComments:(comments) => dispatch(fetchComments(comments))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
