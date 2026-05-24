import Card from './Card';
import useCart from '../hooks/useCart';

const ProductList = ({ data }) => {
  const { addToCart } = useCart();

  const handleClick = (product) => {
    let newProduct = { ...product, quantity: 1 };
    addToCart(newProduct);
  };
  return (
    <>
      <hr className="mt-4 mb-6 text-[#32033a]"></hr>
      <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.thumbnail}
            price={item.price}
            description={item.description}
            handleClick={() => handleClick(item)}
          />
        ))}
      </div>
      <hr className="mt-4 mb-6 text-[#32033a]"></hr>
    </>
  );
};

export default ProductList;
