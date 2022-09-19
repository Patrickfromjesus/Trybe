import React from 'react';
import Children from './Components/Children';
import MyContext from './Components/MyContext';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>App</p>
        <MyContext.Provider value={{ team: 'Real Madrid', country: 'Brazil', }}>
          <Children />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
