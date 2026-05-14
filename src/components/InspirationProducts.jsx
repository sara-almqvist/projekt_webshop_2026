import { useState, useEffect } from 'react';
import ProductList from './ProductList';

const InspirationProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products?limit=3`);
        if (!res.ok) {
          throw new Error('Fel vid anrop till servern', res.status);
        }

        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log('Fel vid hämtning', error);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <h2 className="text-[#ed6b35] text-xl font-normal">
        Dessa produkter är populära just nu
      </h2>
      <ProductList data={products} />
    </>
  );
};

export default InspirationProducts;
