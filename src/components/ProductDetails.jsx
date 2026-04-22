import { useState, useEffect } from 'react';

const ProductDetails = ({ id = 1 }) => {
  const [product, setProduct] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = ({ target }) => {
    setOrderQuantity(target.value);
  };

  const handleClick = () => {
    console.log(`Du har köpt ${orderQuantity} av produkten!`);
    setOrderQuantity(1);
    setConfirmation(true);
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error('Fel vid anrop till servern', res.status);
        }

        const data = await res.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        console.log('Fel vid hämtning', error);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  return product ? (
    confirmation ? (
      <p>Tack för din beställning!</p>
    ) : (
      <div className="grid grid-cols-2 grid-rows-[20%,35%,30%,15%] place-items-center">
        <h3 className="col-span-2">{product.title}</h3>
        <img src={product.images[0]} className="w-48 col-span-2 row-start-2" />
        <p className="row-start-3 col-span-2">{product.description}</p>
        <p className="col-start-1 row-start-4">{product.price} kr</p>
        <label className="">
          Ange önskat antal:
          <input
            id="quantity"
            name="quantity"
            type="number"
            min={1}
            value={orderQuantity}
            className="w-1/6"
            onChange={handleChange}
          />
          <button
            className="bg-gray-500 p-2 rounded-full text-white font-bold hover:bg-gray-600 shadow-xl shadow-grey-500/50"
            onClick={handleClick}
          >
            Lägg i kundvagn
          </button>
        </label>
      </div>
    )
  ) : (
    <p>Information om produkten laddas...</p>
  );
};

export default ProductDetails;
