export const ADD_CLIENT = 'ADD_CLIENT';

const addClient = (clients) => ({
  type: ADD_CLIENT,
  clients: { ...clients },
});

export default addClient;
