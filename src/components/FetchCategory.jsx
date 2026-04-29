import { useEffect, useState } from 'react';
import useFetch from './useFetch';

const FetchCategory = () => {
  const [data] = useFetch('https://dummyjson.com/products/');
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const checkStatus = () => setIsFetched(true);
    if (data.products) {
      checkStatus();
    }
  }, [data, isFetched]);

  return (
    <>
      <p>Testar kategorier</p>
      {isFetched ? (
        <ul>
          {data.products.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Laddning pågår</p>
      )}
    </>
  );
};

export default FetchCategory;
