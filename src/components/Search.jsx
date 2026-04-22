import { useState, useEffect } from 'react';
import Card from './Card';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isFetched, setIsFetched] = useState(false); //för att undvika anrop vid omladdning eller tomt sökfält

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
      } catch (error) {
        console.error('Något gick fel', error);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      setIsFetched(false);
    };
  }, [searchTerm]);

  return (
    <>
      <h2 className="text-blue-600">Vad behöver du idag?</h2>
      <input
        type="text"
        placeholder="Skriv för att söka ..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        {products.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            src={item.images[0]}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default Search;
