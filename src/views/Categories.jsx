import { useEffect, useState } from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import ProductList from '../components/ProductList';

const Categories = () => {
  const [category, setCategory] = useState('mens-watches');
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    setCategory(e.target.value);
  };

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
        setData(data.products);
        setIsFetched(true);
      } catch (error) {
        console.error('Något gick fel', error);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      setIsFetched(false);
    };
  }, [category]);

  return (
    <>
      <h2>Välj kategori</h2>
      <button value={'sunglasses'} onClick={handleClick}>
        Solglasögon
      </button>
      <button value={'beauty'} onClick={handleClick}>
        Skönhet
      </button>
      <button value={'smartphones'} onClick={handleClick}>
        Mobiltelefoner
      </button>
      <Search />
      {isFetched ? (
        <ProductList data={data} />
      ) : (
        <p>Här syns produkter alldeles strax!</p>
      )}
    </>
  );
};

export default Categories;
