import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class HomepageIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="footer">
        <div className="footer-icons">
          <Link to='/'><i className="fa fa-camera-retro fa-2x"></i></Link>
        </div>
        <div className="footer-icons">
          <i className="fa fa-home fa-2x" aria-hidden="true"></i>

        </div>
        <div className="footer-icons">
          <a href="https://github.com/hfeger4">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="footer-icons">
          <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default withRouter(HomepageIndex);
