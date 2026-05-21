import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import useSearch from '../hooks/useSearch';
import { Link } from 'react-router-dom';

const Search = ({ title = 'Vad behöver du idag?' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false); //för att undvika anrop vid omladdning eller tomt sökfält
  const { isSearched, setIsSearched } = useSearch();
  const [localSearch, setLocalSearch] = useState(isSearched);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setIsFetched(false);
    } else {
      setIsFetched(true);
    }
  };

  useEffect(() => {
    if (!isFetched) {
      return;
    }
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        if (!res.ok) {
          throw new Error('fel vid hämtning');
        }

        const data = await res.json();
        setProducts(data.products);
        setIsSearched(true);
        setLocalSearch(true);
      } catch (error) {
        console.error('Något gick fel', error);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      setIsFetched(false);
      setLocalSearch(false);
      setIsSearched(false);
    };
  }, [searchTerm]);

  return (
    <>
      <h2 className="text-[#ed6b35] font-medium text-3xl">{title}</h2>
      <input
        type="text"
        placeholder="Skriv för att söka ..."
        value={searchTerm}
        onChange={handleChange}
        className="bg-gray-100 text-[#db4e14] w-5/6"
      />
      {localSearch &&
        (products.length > 0 ? (
          <ProductList data={products} />
        ) : (
          isSearched && (
            <>
              <p className="text-lg text-[#32033a]">
                Tyvärr hittar vi inte vad du söker efter. Testa att söka med ett
                annat ord eller stavning.
              </p>
              <Link to={'/categories'} className="text-lg text-[#32033a]">
                Eller kolla in våra{' '}
                <span className="text-white bg-[#32033a] px-2 py-1 rounded-xl cursor-pointer hover:bg-[#ed6b35] uppercase font-semibold">
                  kategorier
                </span>
              </Link>
            </>
          )
        ))}
    </>
  );
};

export default Search;
