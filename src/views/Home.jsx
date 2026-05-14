import InspirationProducts from '../components/InspirationProducts';
import Search from '../components/Search';
import useSearch from '../hooks/useSearch';

const Home = () => {
  const { isSearched } = useSearch();
  return (
    <>
      <h1>Välkommen</h1>
      <Search />
      {!isSearched && <InspirationProducts />}
    </>
  );
};

export default Home;
