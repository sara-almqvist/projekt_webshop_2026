const useLocalStorage = (key, defaultValue) => {
  const saveInLocalStorage = () => {
    localStorage.setItem(key, JSON.stringify(defaultValue));
  };

  const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  return [saveInLocalStorage, getFromLocalStorage];
};

export default useLocalStorage;
