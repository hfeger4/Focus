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
  height: "300px",
  width: "300px",
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
    // console.log(currentUser.id);
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
    // console.log(this);
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options, (errors, images) => {
        if (errors === null){
          // console.log(this);
          this.setState({image_url: images[0].url});
        }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const photo = this.state;
    console.log(this.state);
    this.props.createPhoto({photo});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/');
 }

 update(field) {
   return e => this.setState({
     [field]: e.currentTarget.value
   });
 }

  render(){
    // console.log(this.state);
    return(
      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <form onSubmit={this.handleSubmit}>
      <div>
        <button onClick={this.upload}>Upload Image</button>
      </div>
      <input type="text"
             placeholder="Title"
             value={this.state.title}
             onChange={this.update('title')}>
      </input>
      <textarea type="text"
                placeholder="Description"
                value={this.state.body}
                onChange={this.update('body')}>
      </textarea>
      <input type="submit"
             value="Submit">
      </input>
      </form>
      <button onClick={this.closeModal}>close</button>
    </Modal>

    );
  }
}

export default withRouter(PhotoUpload);
