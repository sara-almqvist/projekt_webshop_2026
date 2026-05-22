import InspirationProducts from '../components/InspirationProducts';
import Search from '../components/Search';
import useSearch from '../hooks/useSearch';

const Home = () => {
  const { isSearched } = useSearch();
  return (
    <div className="flex flex-col gap-4 items-center justify-evenly">
      <h1 className="text-[#ed6b35] text-5xl md:text-8xl font-semibold text-shadow-md">
        Välkommen
      </h1>
      <Search />
      {!isSearched && <InspirationProducts />}
    </div>
  );
};

export default Home;
