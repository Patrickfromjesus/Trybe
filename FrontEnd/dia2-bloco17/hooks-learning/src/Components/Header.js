import React, { useContext } from 'react';
import { EmailsContext } from '../Contexts/emailsContextProvider';

const Header = () => {
  const { addEmails } = useContext(EmailsContext);
  return (
    <header style={ { backgroundColor: 'green', color: 'white' } }>
      <h2>TrybeMail</h2>
      <button onClick={ addEmails }>Adicionar emails</button>
    </header>
  );
}
 
export default Header;
