import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render () {
    return <div className='div-principal'>
      <Header />
      <Content />
      <Footer />
    </div>
  }
}

export default App;
