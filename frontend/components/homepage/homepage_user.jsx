import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class HomepageUser extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="footer">
        <h1>TESTING</h1>
      </div>
    );
  }
}

export default withRouter(HomepageUser);
