import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

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
  height: "400px",
  width: "250px",
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

class PhotoUpload extends React.Component{
  constructor(props){
    super(props);
    const { currentUser, image_url } = this.props;
    this.state = {
      title: "",
      body: "",
      image_url: "",
      user_id: currentUser.id,
      modalIsOpen: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options, (errors, images) => {
        if (errors === null){
          this.setState({image_url: images[0].url});
        }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const photo = this.state;
    this.props.createPhoto(photo);
    this.props.history.push('/photos');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/photos');
 }

 update(field) {
   return e => this.setState({
     [field]: e.currentTarget.value
   });
 }

  render(){
    const { photo } = this.state;
    console.log(this.state);
    return(
      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal">

      <div className='login-form-box'>
        <h1>Photo Upload</h1>
          <form onSubmit={this.handleSubmit}>
        <div className='upload-form'>
          <div>
            <button onClick={this.upload}
                    className="submit-button">
                    Upload Image
            </button>
          </div>
          {this.state.image_url !== "" ? (
            <div><i className="fa fa-check" aria-hidden="true"></i></div>) : <div>No Image</div>
          }

          <br/>
          <label>Title:
            <input type="text"
                   className="login-input"
                   value={this.state.title}
                   onChange={this.update('title')}>
            </input>
          </label>
          <br/>
          <label>Description:
            <input type="text"
                      className="login-input"
                      value={this.state.body}
                      onChange={this.update('body')}>
            </input>
         </label>
         <br/>
          <input type="submit"
                 className="submit-button"
                 value="Submit">
          </input>
          <button onClick={this.closeModal}
                  className="close-button">
                  Close
          </button>
          </div>
          </form>
        </div>
    </Modal>

    );
  }
}

export default withRouter(PhotoUpload);
