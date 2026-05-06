import useFetch from './useFetch';
import useCart from './useCart';

function FetchProduct({ productId }) {
  const { addToCart } = useCart();
  const productData = useFetch(`https://dummyjson.com/products/${productId}`);

  addToCart(Object.assign(productData, { quantity: 1 }));
}

export default FetchProduct;
