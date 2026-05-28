import useFavorite from '../hooks/useFavorite';
import ProductList from '../components/ProductList';
import useUser from '../hooks/useUser';
import RelatedProducts from '../components/RelatedProducts';

const MyFavorites = () => {
  const { favoriteList } = useFavorite();
  const { user } = useUser();

  return (
    <div className="text-[#ed6b35]">
      <h1 className="text-3xl font-bold">
        {user.firstName !== '' && `${user.firstName}s `}Favoriter
      </h1>
      {favoriteList.length === 0 && (
        <p className="text-xl bg-white w-1/2 mx-auto mt-6 p-4 font-semibold">
          Du har inte lagt till några favoriter ännu!
        </p>
      )}
      {favoriteList.length > 0 ? (
        <ProductList data={favoriteList} />
      ) : (
        //Show some inspiration if user hasn't choosen any favorites yet. IDEA: save latest search/category-click in global state or sessionstorage and use to show related products
        <RelatedProducts category={'skin-care'} id={1} />
      )}
    </div>
  );
};

export default MyFavorites;
