const Card = ({ id, title, src, price }) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-col flex-nowrap w-3xs p-4 bg-gray-100 gap-2 hover:bg-green-300/50"
      >
        <h3 className="text-purple-500 font-bold text-xl">{title}</h3>
        <img src={src} className="max-w-2xs" />
        <p>{price} kr</p>
        <button className="bg-gray-500 p-2 rounded-full text-white font-bold hover:bg-gray-600 shadow-xl shadow-grey-500/50">
          Lägg i kundvagn
        </button>
      </div>
    </>
  );
};

export default Card;
