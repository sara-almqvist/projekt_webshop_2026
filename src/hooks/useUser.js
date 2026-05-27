import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function useUser() {
  const { user, setUser, clearUser } = useContext(UserContext);
  return { user, setUser, clearUser };
}

export default useUser;
