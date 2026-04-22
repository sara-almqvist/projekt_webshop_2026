import { useState, useEffect } from 'react';

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
    }, 3000);

    return () => {
      clearTimeout(timer);
      setIsFetched(false);
    };
  }, [searchTerm]);

  return (
    <>
      <h2>Vad behöver du idag?</h2>
      <input
        type="text"
        placeholder="Skriv för att söka ..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Search;
