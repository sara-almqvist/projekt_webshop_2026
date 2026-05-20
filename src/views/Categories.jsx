import { useEffect, useState } from 'react';
import Search from '../components/Search';
import ProductList from '../components/ProductList';
import Button from '../components/Button';
import CategoryButtons from '../components/CategoryButtons';
import useSearch from '../hooks/useSearch';

const Categories = () => {
  const [category, setCategory] = useState('mens-watches');
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);
  const [useSearchField, setUseSeachField] = useState(true);
  const { isSearched, setIsSearched } = useSearch();

  const handleClick = (e) => {
    setCategory(e.target.value);
    setUseSeachField(false);
    setIsSearched(false);
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
    }, 500);

    return () => {
      clearTimeout(timer);
      setIsFetched(false);
    };
  }, [category]);

  return (
    <>
      <CategoryButtons handleClick={handleClick} />
      {useSearchField ? (
        <Search title="Eller skriv i sökfältet för att hitta din nästa favorit" />
      ) : (
        <Button text={'Egen sökning'} action={() => setUseSeachField(true)} />
      )}
      {!isSearched &&
        (isFetched ? (
          <ProductList data={data} />
        ) : (
          <p className="text-lg text-[#ed6b35]">
            Här syns produkter alldeles strax!
          </p>
        ))}
    </>
  );
};

export default Categories;
