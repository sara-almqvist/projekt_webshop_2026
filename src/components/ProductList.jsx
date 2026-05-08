import Card from './Card';
import useCart from './useCart';

const ProductList = ({ data }) => {
  const { addToCart } = useCart();

  const handleClick = (product) => {
    let newProduct = { ...product, quantity: 1 };
    addToCart(newProduct);
  };
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.thumbnail}
            price={item.price}
            handleClick={() => handleClick(item)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
