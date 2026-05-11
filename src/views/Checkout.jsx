import OrderForm from '../components/OrderForm';

const Checkout = () => {
  return (
    <>
      <h1>Betala och få dina varor</h1>
      <p>
        Skapa formulär för att fylla i leveransadress alt kunna logga in och
        uppgifterna hämtas automatiskt
      </p>
      <OrderForm />
    </>
  );
};

export default Checkout;
