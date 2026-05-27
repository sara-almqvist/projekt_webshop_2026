import { CircleUser, UserRoundPlus } from 'lucide-react';
import useUser from '../hooks/useUser';

const AdminUser = () => {
  const { user } = useUser();

  return user.firstName === '' ? (
    <UserRoundPlus className="w-8 h-8 hover:text-white" />
  ) : (
    <CircleUser className="w-8 h-8 hover:text-white" />
  );
};

export default AdminUser;
