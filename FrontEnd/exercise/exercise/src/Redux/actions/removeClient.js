export const REMOVE_CLIENT = 'REMOVE_CLIENT';

const removeClient = (client) => ({
  type: REMOVE_CLIENT,
  client,
});

export default removeClient;
