import { useState } from 'react';
import SearchContext from '../contexts/SearchContext';

const SearchProvider = ({ children }) => {
  const [isSearched, setIsSearched] = useState(false);

  return (
    <SearchContext.Provider value={{ isSearched, setIsSearched }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
