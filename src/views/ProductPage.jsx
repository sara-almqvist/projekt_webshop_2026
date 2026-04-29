import ProductDetails from '../components/ProductDetails';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  let id = useParams();

  return (
    <>
      <ProductDetails id={id} />
    </>
  );
};

export default ProductPage;
