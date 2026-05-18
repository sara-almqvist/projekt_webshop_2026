import Button from './Button';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <dialog>
        <div className="flex place-items-center">
          <div className="bg-grey-600">
            {children}
            <Button text={'Stäng'} action={onClose} />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
