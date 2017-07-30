import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';
import selectAllAlbums from '../../reducers/selectors';

const customStyles = {
  overlay : {
  position        : 'fixed',
  top             : 0,
  left            : 0,
  right           : 0,
  bottom          : 0,
  backgroundColor : 'rgba(0, 0, 0, 0.8)',
  zIndex          : 10
},
content : {
  position                   : 'fixed',
  height: "600px",
  width: "600px",
  top                        : '50%',
  left                       : '50%',
  border                     : '1px solid black',
  "transform"                : 'translate(-50%, -50%)',
  padding                    : '36px',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  outline                    : 'none',
  borderRadius               : '3px',
  zIndex          : 11,
  opacity         : 100,
  transition      : 'opacity 0.5s'
}
};

class PhotoShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: true,
      username: '',
      password: '',
      album_id: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const { match, fetchUserAlbums } = this.props;
    this.props.fetchUserAlbums(this.props.photo.user_id);
  }

  handleDelete(e){
    e.preventDefault();
    if(confirm("Are you sure you want to delete this photo?")){
      this.props.deletePhoto(this.props.photo.id);
      this.props.history.push('/photos');
    }

  }

  handleChange(e){
    e.preventDefault();
    this.setState({album_id: e.target.value});
  }

  handleListAlbums(){
    const listAlbums = this.props.albums.map((album) => {
      return(

        <option key={album.id + "album"} value={album.id}>{album.title}</option>
      );
    });
    return listAlbums;
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/photos');
 }

 handleSubmit(e) {
   e.preventDefault();
   if(confirm("Are you sure you want to add this photo to your album?")){
   let photo = Object.assign({}, this.props.photo, this.state);
   this.props.updatePhoto(photo);
   this.props.history.push('/photos');}
 }

  render(){
    if (this.state.modalIsOpen === undefined){
      this.openModal();
    }
    const {photo} = this.props;
    const {title, body, user, id} = this.props.photo;
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <div className="entire-photo">
            <div className="whole-photo-modal">
              <h1>{title}</h1>
              <div className="photo-modal">
                <img src={ photo.image_url }/>
              </div>
              <div className="photo-description">
                <label className="description">
                  <br/>
                  <div>{body}</div>
                </label>
                <div>
               {photo.user_id === this.props.currentUser.id ? (
                  <form onSubmit={this.handleSubmit}>

                  <select className="dropdown" value={this.state.album_id} onChange={this.handleChange}>
                    <option> Select Album </option>
                    {this.handleListAlbums()}
                  </select>
                  <button value="Submit"><h3>&nbsp;&nbsp;&nbsp;Submit</h3></button>
                  </form>
                ) : (<div></div>) }
                </div>
                <Link to={`/comments/${id}`}><button className="submit-button" type="button">Comments Page</button></Link>
                {photo.user_id === this.props.currentUser.id ? (
                  <button className="submit-button"
                    type="button"
                    onClick={this.handleDelete}>
                    Delete
                  </button>
                ) : <div></div>}
              </div>
            </div>
        </div>
      </Modal>
    );
  }
}

export default withRouter(PhotoShow);
