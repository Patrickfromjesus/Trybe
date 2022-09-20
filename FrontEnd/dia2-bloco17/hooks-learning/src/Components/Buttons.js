import React, { useContext } from 'react';
import { EmailsContext } from '../Contexts/emailsContextProvider';

const Buttons = () => {
  const { changeEvery } = useContext(EmailsContext);
  return (
    <div style={ { textAlign: 'center' } }>
      <button onClick={ () => changeEvery(1) } style={ { marginRight: '3rem' } } type="button">Marcar todos como lido</button>
      <button onClick={ () => changeEvery(0) } type="button">Marcar todos como não lido</button>
    </div>
  );
}
 
export default Buttons;
