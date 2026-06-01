import Button from '../components/Button';
import OrderForm from '../components/OrderForm';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

const UserAdminView = () => {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  return (
    <div className="flex flex-col w-5/6 mx-auto">
      <div className="self-end">
        <Button text={'X'} action={() => navigate(-1)} />
      </div>
      <OrderForm OnSubmit={() => navigate(-1)} />
      <div className="self-end">
        <Button
          text={'Glöm bort mig'}
          action={() => {
            clearUser();
            navigate(-1);
          }}
        />
      </div>
    </div>
  );
};

export default UserAdminView;
