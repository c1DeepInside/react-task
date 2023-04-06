import '../../styles/search.scss';

import React, { FormEvent, useEffect, useState } from 'react';

type Props = {
  startSearch: (search: string) => void;
};

function SearchComponent({ startSearch }: Props) {
  const [search, setSearch] = useState('');

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const localStorageText = !!localStorage.getItem('searchInput')
      ? localStorage.getItem('searchInput')!
      : '';
    setSearch(localStorageText);
    startSearch(localStorageText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchInput', search);
    startSearch(search);
  };

  return (
    <form onSubmit={submitSearch} className="search__wrap" data-testid="search__form">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={changeSearch}
        data-testid="search__input"
      />
      <button className="search__btn btn">Search</button>
    </form>
  );
}

export default SearchComponent;
