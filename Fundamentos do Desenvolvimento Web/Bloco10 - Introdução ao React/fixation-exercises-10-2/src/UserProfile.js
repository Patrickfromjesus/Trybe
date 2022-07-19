import { Component } from "react";

class UserProfile extends Component {
  render() {
    const { name, email } = this.props.profile;
    return <div className='profiles'>
      <h4>Name: {name}</h4>
      <h4>email: {email}</h4>
    </div>
  }
}

export default UserProfile;