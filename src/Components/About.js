import React from 'react';
import { Outlet } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('deepak');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }
  render() {
    return (
      <div className='about'>
        <h1>About Us page</h1>
        <p>This is a about page</p>
        <Outlet />
      </div>
    );
  }
}

export default About;
