import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCart from './useCart';

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, addToCart, addNewQuantity } = useCart();
  const [product, setProduct] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState(false);

  const handleChange = ({ target }) => {
    setOrderQuantity(parseInt(target.value));
  };

  const handleClick = () => {
    if (cart.some((obj) => obj.id === product.id)) {
      console.log('Finns redan i kundvagnen');
      const quantityInCart = cart.find((obj) => obj.id === product.id).quantity;
      addNewQuantity(product.id, quantityInCart + orderQuantity);
      setConfirmation(true);
    } else {
      setProduct(() => Object.assign(product, { quantity: orderQuantity }));
      addToCart(product);
      setConfirmation(true);
    }
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
      } catch (error) {
        console.log('Fel vid hämtning', error);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  return product ? (
    confirmation ? (
      <p>
        {`Du har lagt ${orderQuantity} st av ${product.title} i kundvagnen!`}
        <Link to={'/categories'}>Handla vidare</Link>
        <Link to={'/checkout'}>Till kassan</Link>
      </p>
    ) : (
      <div className="grid grid-cols-2 grid-rows-[20%,35%,30%,15%] place-items-center">
        <h3 className="col-span-2 text-4xl">{product.title}</h3>
        <img src={product.images[0]} className="w-48 col-span-2 row-start-2" />
        <p className="row-start-3 col-span-2">{product.description}</p>
        <p className="col-start-1 row-start-4">{product.price} kr</p>
        <label className="bg-green-100">
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
        <Link to={'/'} className="bg-purple-200 hover:bg-purple-400 p-4">
          Tillbaka
        </Link>
      </div>
    )
  ) : (
    <p>Information om produkten laddas...</p>
  );
};

export default ProductDetails;
