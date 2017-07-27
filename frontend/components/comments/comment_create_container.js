import { connect } from 'react-redux';
import { selectAllPhotos, selectComment, selectPhoto, selectAllComments} from '../../reducers/selectors';
import { createComment, deleteComment, fetchComment, fetchComments } from '../../actions/comment_actions';
import CommentCreate from './comment_create';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state) => ({
  photo: state.photo
});

const mapDispatchToProps = (dispatch) => ({
  createComment:(comment) => dispatch(createComment(comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentCreate);
