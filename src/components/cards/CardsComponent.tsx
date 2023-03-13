import React, { Component } from 'react';
import Card from './Card';

export default class CardsComponent extends Component {
  render() {
    return (
      <div className="cards__wrap">
        <h2 className="cards__text">Cards:</h2>
        <hr className="cards__hr" />
        <div className="cards__field">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
