import React, { useContext } from 'react';
import { EmailsContext } from '../Contexts/emailsContextProvider';

const Emails = () => {
  const { emails, handleEmail } = useContext(EmailsContext);
  return (
    <div style={ { display: 'flex', justifyContent: 'center', marginTop: '5rem' } }>
      { emails.every((e) => e.status === 1) && window.alert('Parabéns, você leu todos os emails!') }
      <div style={ { boxShadow: '3px 3px 10px #000', backgroundColor: '#aaa', textAlign: 'center', width: '80rem', borderRadius: '5px' } }>
        {
          emails.map((email) => (
            <div key={ email.id } style={ { display: 'flex', justifyContent: 'space-between' } }>
              <h4>{ email.title }</h4>
              <button onClick={ () => handleEmail(email.id, 'read') }>Marcar como Lida</button>
              <button onClick={ () => handleEmail(email.id) }>Marcar como não Lida</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
 
export default Emails;