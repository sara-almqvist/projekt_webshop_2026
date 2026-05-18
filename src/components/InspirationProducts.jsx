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
    <div className="p-2 m-2">
      <h2 className="text-[#ed6b35] text-xl font-normal">
        Tre av våra mest populära produkter just nu:
      </h2>
      <ProductList data={products} />
    </div>
  );
};

export default InspirationProducts;
