import React, { useRef } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { setSearchInput } = useGlobalContext();
  const inputRef = useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInput = () => {
    setSearchInput(inputRef.current.value);
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <div className='form-control'>
          <label htmlFor='name'>enter your search</label>
          <input type='text' id='name' ref={inputRef} onChange={handleInput} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
