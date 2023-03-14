import React, { Component } from 'react';
import '../../styles/search.scss';

interface Props {
  text?: string;
}

export default class SearchComponent extends Component<Props, { search: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      search: !!localStorage.getItem('searchInput') ? localStorage.getItem('searchInput')! : '',
    };
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchInput', this.state.search);
  }

  changeSearch = (value: string) => {
    this.setState({ search: value });
  };

  render() {
    return (
      <div className="search__wrap">
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.changeSearch(e.target?.value)}
        />
        <button className="search__btn">Search</button>
      </div>
    );
  }
}
