import useCart from './useCart';
import useUser from '../hooks/useUser';
import OrderForm from './OrderForm';
import Modal from './Modal';
import { useState } from 'react';
import Button from './Button';

const Test = () => {
  const { cart } = useCart();
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  return (
    <>
      {user.firstName !== '' ? (
        <>
          <p>Redo att betala {user.firstName} ?</p>
          <Button text={'Ändra uppgifter'} action={handleOpen} />
          <Modal isOpen={modalOpen} onClose={handleClose}>
            <OrderForm modalClose={handleClose} />
          </Modal>
        </>
      ) : (
        <>
          <h3>Fyll i dina uppgifter</h3>
          <OrderForm />
        </>
      )}

      <p>{cart.length > 0 ? cart[0].title : 'Tom kundvagn'}</p>
    </>
  );
};

export default Test;
