const Card = ({ id, title, src, price }) => {
  return (
    <>
      <div key={id}>
        <h3 className="">{title}</h3>
        <img src={src} style={{ width: 200 }} />
        <p>{price} kr</p>
        <button>Lägg i kundvagn</button>
      </div>
    </>
  );
};

export default Card;
