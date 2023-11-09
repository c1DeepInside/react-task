import '../../styles/search.scss';

import React, { FormEvent, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setStorageSearch } from '../../store/searchSlice';

function SearchComponent() {
  const searchStorage = useAppSelector((state) => state.search.search);
  const [search, setSearch] = useState(searchStorage);
  const dispatch = useAppDispatch();

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setStorageSearch(search));
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
