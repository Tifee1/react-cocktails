import React, { useContext, useState, useEffect } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('i');
  const [cocktail, setCocktails] = useState([]);

  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchInput}`);
      const { drinks } = await response.json();
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            type: strAlcoholic,
            img: strDrinkThumb,
            glass: strGlass,
          };
        });
        setCocktails(newDrinks);
        setIsLoading(false);
      } else {
        setCocktails([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchInput]);

  useEffect(() => {
    fetchData();
  }, [searchInput, fetchData]);

  return (
    <AppContext.Provider
      value={{ isLoading, cocktail, setSearchInput, searchInput }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
