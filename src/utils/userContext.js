import { createContext } from 'react';

const UserContext = createContext({
  user: { name: 'Deepak Verma', email: 'deepak@gmail.com' },
});

export default UserContext;
