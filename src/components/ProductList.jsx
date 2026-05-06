import Card from './Card';

const ProductList = ({ data }) => {
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
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
