import OrderForm from './OrderForm';
import { useNavigate } from 'react-router-dom';

const Delivery = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="text-[#ed6b35] text-2xl font-semibold p-3">
        Fyll i dina leveransuppgifter
      </h3>
      <div className=" w-full md:w-5/6 m-auto mb-8">
        <OrderForm OnSubmit={() => navigate('/checkout')} />
      </div>
    </>
  );
};

export default Delivery;
