import React from 'react';
import CocktailList from './CocktailList';
import { useGlobalContext } from './context';

const Cocktail = () => {
  const { cocktail } = useGlobalContext();

  if (cocktail.length < 1) {
    return (
      <section className='section'>
        <h2 className='section-title'>no cocktail matched your search</h2>
      </section>
    );
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktail.map((drink) => {
          return <CocktailList key={drink.id} {...drink} />;
        })}
      </div>
    </section>
  );
};

export default Cocktail;
