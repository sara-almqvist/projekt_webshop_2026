import { useEffect, useState } from 'react';
import ProductList from './ProductList';

const RelatedProducts = ({ category, id }) => {
  const [data, setData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        if (!res.ok) {
          throw new Error('fel vid hämtning');
        }

        const data = await res.json();
        const filteredData = data.products.filter(
          (element) => element.id !== id
        );
        setData(filteredData.slice(0, 3));
        setIsFetched(true);
      } catch (error) {
        console.error('Något gick fel', error);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      setIsFetched(false);
    };
  }, [category, id]);

  return (
    <>
      {isFetched ? (
        <>
          <h3 className="text-[#f18d64] text-xl p-4">
            Du kanske också är intresserad av
          </h3>
          <ProductList data={data} />
        </>
      ) : (
        <p className="text-[#ed6b35] text-xl">Här kommer snart inspiration</p>
      )}
    </>
  );
};

export default RelatedProducts;
