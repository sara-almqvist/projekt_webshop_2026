import Card from './Card';
import useCart from './useCart';

const ProductList = ({ data }) => {
  const { addToCart } = useCart();

  return (
    <>
      <div
        className="flex flex-wrap gap-4 justify-center items-center"
        onClick={(e) => {
          console.log(`Du klickade på: ${e.target}`);
        }}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.thumbnail}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
