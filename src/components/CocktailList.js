import React from 'react';
import { Link } from 'react-router-dom';

const CocktailList = ({ id, name, img, type, glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={img} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{type}</p>
        <Link to={`/cocktail/${id}`}>
          <button className='btn primary-btn detail'>details</button>
        </Link>
      </div>
    </article>
  );
};

export default CocktailList;
