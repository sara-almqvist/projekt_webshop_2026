const OrderConfirmation = ({ orderid = 16282 }) => {
  return (
    <div className="text-[#ed6b35] md:min-h-150">
      <h1 className="text-4xl font-semibold p-3">Tack för din beställning!</h1>
      <p className="text-2xl font-medium p-3">
        Nu börjar vi packa dina varor från vårt lager och skickar hem dem till
        dig så fort det bara går!
      </p>
      <div className="bg-[#32033a] size-85 m-auto relative">
        <p className="absolute bottom-40 left-10 text-3xl font-semibold">
          Ditt ordernummer: <br /> #{orderid}
        </p>
        <img
          src="https://res.cloudinary.com/dfplwytwx/image/upload/v1779129897/satisfaction_n738xp.png"
          className="max-w-1/4 absolute bottom-0 -right-23 lg:animate-bounce"
        />
      </div>
    </div>
  );
};

export default OrderConfirmation;
