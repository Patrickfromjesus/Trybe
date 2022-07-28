import React, { Component } from "react";

class RandomUser extends Component {
  constructor(props) {
    super(props);
    console.log('CONSTRUCTOR');
    this.state = {
      loading: true,
      result: [],
      age: 0,
    }
  }

  async componentDidMount() {
    this.setState({ loading: true }, async () => {
    const headerAcess = { headers: { 'Accept': '20220728113154' } }
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url, headerAcess);
    const data = await response.json();
    const newData = Object.entries(data.results[0]);
    this.setState({ result: newData, loading: false, age: newData[5][1].age });
  });
    
  }

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.age > 50) return false;
    return true;
  }

  render() {
    const { loading, result } = this.state;
    if (loading) return <div><h2>Carregando...</h2></div>;
    const info = [];
    result.forEach((user, index) => {
      if (user[0] === 'name') info.push(<p key={index}>{ `${user[1].title} ${user[1].first} ${user[1].last}` }</p>);
      if (user[0] === 'email') info.push(<p key={index}>{ user[1] }</p>);
      if (user[0] === 'dob') info.push(<p key={index}>{ user[1].age }</p>);
      if (user[0] === 'picture') info.push(<img key={index} src={user[1].large} alt='user' />);
    });
    return(
      <div>
        { info }
      </div>
    );
  }
}

export default RandomUser;