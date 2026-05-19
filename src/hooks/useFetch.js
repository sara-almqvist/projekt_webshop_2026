import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('fel vid hämtning av produkterna');
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error('Något gick fel', error);
      }
    };

    fetchData();
  }, [url]);

  return [data];
};

export default useFetch;
