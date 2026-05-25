import Card from './Card';
import useCart from '../hooks/useCart';

const ProductList = ({ data }) => {
  const { addToCart } = useCart();

  const handleClick = (product) => {
    let newProduct = { ...product, quantity: 1 };
    addToCart(newProduct);
  };
  return (
    <div className="w-full">
      <hr className="mt-4 mb-6 text-[#32033a] border-dotted"></hr>
      <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.thumbnail}
            price={+(item.price * 5).toFixed(2)}
            description={item.description}
            handleClick={() => handleClick(item)}
          />
        ))}
      </div>
      <hr className="mt-4 mb-6 text-[#32033a] border-dotted"></hr>
    </div>
  );
};

export default ProductList;
