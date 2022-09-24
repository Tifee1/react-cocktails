import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  document.title = '404 Page Not Found';

  return (
    <section className='error-page section'>
      <div className='error-center'>
        <h1>oops, page not found</h1>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
