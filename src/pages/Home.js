import React from 'react';
import SearchForm from '../components/SearchForm';
import Cocktail from '../components/Cocktail';
import Loading from '../components/Loading';
import { useGlobalContext } from '../components/context';

const Home = () => {
  const { isLoading } = useGlobalContext();

  return (
    <main>
      <SearchForm />

      {isLoading ? <Loading /> : <Cocktail />}
    </main>
  );
};

export default Home;
