import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function useUser() {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
}

export default useUser;
