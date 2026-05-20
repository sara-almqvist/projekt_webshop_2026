import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import Button from './Button';
import RelatedProducts from './RelatedProducts';

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, addToCart, addNewQuantity } = useCart();
  const [product, setProduct] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setOrderQuantity(parseInt(target.value));
  };

  const handleClick = () => {
    if (cart.some((obj) => obj.id === product.id)) {
      const quantityInCart = cart.find((obj) => obj.id === product.id).quantity;
      addNewQuantity(product.id, quantityInCart + orderQuantity);
      setConfirmation(true);
    } else {
      const productWithQuantity = Object.assign(product, {
        quantity: orderQuantity,
      });
      setProduct(productWithQuantity);
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
      <div className="flex flex-col flex-wrap gap-4 m-auto text-xl justify-center">
        <p className="text-[#ed6b35]">
          {`Du har lagt ${orderQuantity} st av ${product.title} i kundvagnen!`}
        </p>
        <div className="flex flex-row flex-nowrap gap-4 text-xl justify-center">
          <Button text={'Handla vidare'} action={() => navigate(-1)} />
          <Link
            to={'/checkout'}
            className="bg-[#32033a] p-2 rounded-full text-white font-bold hover:bg-[#db4e14] shadow-xl shadow-grey-500/50 my-2 cursor-pointer"
          >
            Till kassan
          </Link>
        </div>
      </div>
    ) : (
      <>
        <div className="w-5/6 p-4 bg-[#ffffff]/50 text-[#ed6b35] text-xl mx-auto mt-4">
          <div className="flex flex-col gap-4">
            <div className="self-end">
              <Button text={'X'} action={() => navigate(-1)} />
            </div>
            <h3 className="text-4xl text-[#32033a] font-semibold">
              {product.title}
            </h3>
            <div className="flex flex-col sm:flex-row flex-nowrap gap-4 place-items-center">
              <img src={product.images[0]} className="w-48" />
              <p>{product.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 place-items-center">
              <p className="basis-1/6">{product.price} kr/st</p>
              <div className="text-[#32033a] flex gap-4 items-center">
                <label>
                  Ange önskat antal:
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min={1}
                    value={orderQuantity}
                    className="w-1/4 sm:w-1/8 bg-white text-center"
                    onChange={handleChange}
                  />
                </label>
                <Button text={'Lägg i kundvagn'} action={handleClick} />
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts category={product.category} id={product.id} />
      </>
    )
  ) : (
    <p className="text-[#ed6b35] text-xl">Information om produkten laddas...</p>
  );
};

export default ProductDetails;
