import CartList from '../components/CartList';
import OrderForm from '../components/OrderForm';
import TotalSum from '../components/TotalSum';
import useCart from '../hooks/useCart';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import InspirationProducts from '../components/InspirationProducts';
import Delivery from '../components/Delivery';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  const handleCheckOut = () => {
    if (user.address === '') {
      navigate('/delivery');
    } else {
      navigate('/thanks');
      clearCart();
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (modalOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [modalOpen]);

  return (
    <>
      {cart.length === 0 && (
        <>
          <p className="text-[#ed6b35] text-2xl font-semibold p-7 ">
            Oops... Du behöver lägga något i kundvagnen innan du betalar i
            kassan
          </p>
          <InspirationProducts />
        </>
      )}

      {user.firstName !== '' ? (
        <>
          <h2 className="text-[#ed6b35] text-2xl font-semibold p-3">
            Kontrollera innehållet i din kundvagn, {user.firstName}
          </h2>

          <Button
            text={`Är du inte ${user.firstName}, eller vill du ändra leveransadress?`}
            action={() => {
              setModalOpen(true);
            }}
          />
          <dialog
            ref={dialogRef}
            onClose={() => setModalOpen(false)}
            className="p-4 fixed m-auto sm:w-1/2 max-w-[600px]"
          >
            <h2 className="text-[#ed6b35] text-2xl font-semibold">
              Kunduppgifter:
            </h2>
            <OrderForm modal={() => setModalOpen(false)} />
            <Button text={'Stäng rutan'} action={() => setModalOpen(false)} />
          </dialog>
        </>
      ) : (
        <Delivery />
      )}

      <CartList products={cart} />

      {cart.length > 0 && (
        <div className="bg-[#ed6b35]/50 p-4 rounded-xl shadow-xl m-4">
          <div className="flex flex-col-reverse md:flex-row flex-nowrap my-4 mx-2 lg:justify-evenly gap-6 justify-center">
            <Link
              to={'/categories'}
              className="bg-[#32033a] p-3 rounded-full text-white text-xl font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 cursor-pointer "
            >
              Fortsätt handla
            </Link>

            <button
              className="bg-[#32033a] p-3 rounded-full text-white text-xl font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 cursor-pointer "
              onClick={handleCheckOut}
            >
              Beställ och betala varorna i kundvagnen
            </button>
            <TotalSum />
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
