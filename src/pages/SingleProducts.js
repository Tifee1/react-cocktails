import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleProducts = () => {
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  document.title = `Cocktail DB`;
  const { cocktailId } = useParams();

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${cocktailId}`);
      const data = await response.json();
      if (data.drinks) {
        const tempDrink = data.drinks[0];
        const {
          strDrink,
          strGlass,
          strInstructions,
          strCategory,
          strDrinkThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = tempDrink;
        const ingre = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const drink = {
          name: strDrink,
          info: strInstructions,
          cat: strCategory,
          img: strDrinkThumb,
          ingre,
          glass: strGlass,
        };
        setCocktail(drink);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [cocktailId]);

  useEffect(() => {
    fetchData();
  }, [cocktailId, fetchData]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  }
  if (cocktail) {
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back to homepage
        </Link>
        <h2 className='section-title'>{cocktail.name}</h2>
        <div className='drink'>
          <img src={cocktail.img} alt={cocktail.name} />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name:</span>
              {cocktail.name}
            </p>
            <p>
              <span className='drink-data'>category:</span>
              {cocktail.cat}
            </p>
            <p>
              <span className='drink-data'>info:</span>
              {cocktail.info}
            </p>
            <p>
              <span className='drink-data'>glass:</span>
              {cocktail.glass}
            </p>
            <p>
              <span className='drink-data'>ingredients:</span>
              {cocktail.ingre.map((item, index) => {
                if (!item) {
                  return null;
                }
                return <span key={index}>{item}</span>;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleProducts;
