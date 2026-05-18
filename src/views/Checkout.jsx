import CartList from '../components/CartList';
import OrderForm from '../components/OrderForm';
import TotalSum from '../components/TotalSum';
import useCart from '../components/useCart';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import InspirationProducts from '../components/InspirationProducts';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const dialogRef = useRef(null);

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
      {user.firstName !== '' ? (
        cart.length === 0 ? (
          <>
            <p className="text-[#ed6b35] text-2xl font-semibold p-7 ">
              Oops... Du behöver lägga något i kundvagnen innan du betalar i
              kassan
            </p>
            <InspirationProducts />
          </>
        ) : (
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
              className="p-4 fixed m-auto w-1/2 max-w-[600px]"
            >
              <h2 className="text-[#ed6b35] text-2xl font-semibold">
                Kunduppgifter:
              </h2>
              <OrderForm modal={() => setModalOpen(false)} />
              <Button text={'Stäng rutan'} action={() => setModalOpen(false)} />
            </dialog>
          </>
        )
      ) : (
        <>
          <h3 className="text-[#ed6b35] text-2xl font-semibold p-3">
            Fyll i dina uppgifter
          </h3>
          <OrderForm />
        </>
      )}

      <CartList products={cart} />

      {cart.length > 0 && (
        <>
          <TotalSum />
          <div className="flex flex-row flex-wrap gap-6 justify-center">
            <Link
              to={'/categories'}
              className="bg-[#32033a] p-3 rounded-full text-white text-xl font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 cursor-pointer "
            >
              Handla mer
            </Link>
            <Link
              to={'/thanks'}
              onClick={() => clearCart()}
              className="bg-[#32033a] p-3 rounded-full text-white text-xl font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 cursor-pointer basis-2/3"
            >
              Beställ och betala varorna i kundvagnen
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Checkout;
