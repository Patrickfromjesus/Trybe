import React from 'react';
import Buttons from './Components/Buttons';
import Emails from './Components/Emails';
import Header from './Components/Header';
import EmailsContextProvider from './Contexts/emailsContextProvider';

function App() {
  return (
    <div className="App">
      <EmailsContextProvider>
        <Header />
        <Buttons />
        <Emails />
      </EmailsContextProvider>
    </div>
  );
}

export default App;
