import InspirationProducts from '../components/InspirationProducts';
import Search from '../components/Search';
import useSearch from '../hooks/useSearch';

const Home = () => {
  const { isSearched } = useSearch();
  return (
    <>
      <h1 className="text-[#ed6b35] text-8xl font-semibold text-shadow-md">
        Välkommen
      </h1>
      <Search />
      {!isSearched && <InspirationProducts />}
    </>
  );
};

export default Home;
