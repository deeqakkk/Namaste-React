import React from 'react';
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch(' https://api.github.com/users/deeqakkk');
    const userInfo = await data.json();
    this.setState({
      userInfo: userInfo,
    });
  }
  render() {
    return (
      <div className='class-container'>
        <h1>{this.state.userInfo.login}</h1>
        <h2>{this.state.userInfo.location}</h2>
        <img src={this.state.userInfo.avatar_url} alt="profile" height={100} />

      </div>
    );
  }
}

export default ProfileClass;
