import { useState } from 'react';
import UserContext from '../contexts/UserContext';

function UserProvider({ children }) {
  let checkLocal = JSON.parse(localStorage.getItem('user'));
  let status;
  if (checkLocal) {
    status = checkLocal;
  } else {
    status = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      postCode: '',
      city: '',
    };
  }

  const [user, setUser] = useState(status);

  const clearUser = () => {
    localStorage.removeItem('user');
    setUser({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      postCode: '',
      city: '',
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
