import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Masonry from 'react-masonry-component';

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
      password: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/photos');
 }

  render(){
    if (this.state.modalIsOpen === undefined){
      this.openModal();
    }
    const {photo} = this.props;
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <div>
          <img src={ photo.image_url }/>
        </div>
      </Modal>
    );
  }
}

export default withRouter(PhotoShow);
