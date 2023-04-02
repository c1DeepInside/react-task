import '../../styles/search.scss';

import React, { useEffect, useRef, useState } from 'react';

function SearchComponent() {
  const searchRef = useRef<string>();
  const [search, setSearch] = useState(
    !!localStorage.getItem('searchInput') ? localStorage.getItem('searchInput')! : ''
  );

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  useEffect(() => {
    return () => {
      localStorage.setItem('searchInput', searchRef.current!);
    };
  }, []);

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search__wrap">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={changeSearch}
        data-testid="search__input"
      />
      <button className="search__btn btn">Search</button>
    </div>
  );
}

export default SearchComponent;
