const OrderConfirmation = ({ orderid = 16282 }) => {
  return (
    <div className="text-[#ed6b35] flex flex-col gap-2 place-items-center">
      <h1 className="text-4xl font-semibold p-3">Tack för din beställning!</h1>
      <p className="text-2xl font-medium p-3">
        Nu börjar vi packa dina varor från vårt lager och skickar hem dem till
        dig så fort det bara går!
      </p>
      <div className="w-5/6 my-4 ">
        <div className="bg-[#32033a]  size-60 md:size-85 m-auto relative">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold">
            Ditt ordernummer: <br /> #{orderid}
          </p>
          <img
            src="https://res.cloudinary.com/dfplwytwx/image/upload/v1779129897/satisfaction_n738xp.png"
            className="max-w-1/4 absolute bottom-0 -right-23 lg:animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
