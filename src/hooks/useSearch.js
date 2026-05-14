import { useContext } from 'react';
import SearchContext from '../contexts/SearchContext';

function useSearch() {
  const { isSearched, setIsSearched } = useContext(SearchContext);
  return { isSearched, setIsSearched };
}

export default useSearch;
