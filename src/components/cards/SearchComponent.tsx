import React, { Component } from 'react';
import '../../styles/search.scss';

type Props = {
  text?: string;
};

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
          data-testid="search__input"
        />
        <button className="search__btn btn">Search</button>
      </div>
    );
  }
}
