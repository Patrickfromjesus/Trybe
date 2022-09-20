import React, { createContext, useState } from 'react';
import fetchEmail from '../helper/mockEmails';

export const EmailsContext = createContext();

const EmailsContextProvider = ({ children }) => {

  const [emails, setEmails] = useState([{
    id: 0,
    title: 'Jesus te ama, irmão, creia nisso',
    status: 0
  }]);

  const addEmails = async () => {
    const title = await fetchEmail();
    setEmails((prev) => ([
      ...prev,
      { id: prev[prev.length - 1].id + 1, title, status: 0 },
    ]))
  };

  const changeStatus = (prev, id, status) => {
    const prevs = [...prev];
        const before = prevs.splice(0, id);
        const newArr = [{ ...prev[id], status}];
        const after = prevs.splice(1);
        const concatArr = before.concat(newArr);
        const finishedArr = concatArr.concat(after);
        return finishedArr;
  }

  const changeEvery = (status) => {
    setEmails((prev) => {
      return prev.map((e) => ({ id: e.id, title: e.title, status }))
    })
  }

  const handleEmail = (id, type) => {
    if (type === 'read') {
      setEmails((prev) => changeStatus(prev, id, 1));
    } else {
      setEmails((prev) => changeStatus(prev, id, 0));
    }
  }

  const contextObj = {
    emails,
    addEmails,
    handleEmail,
    changeEvery,
  }

  return (
    <EmailsContext.Provider value={ contextObj }>
      { children }
    </EmailsContext.Provider>
  );
}
 
export default EmailsContextProvider;
