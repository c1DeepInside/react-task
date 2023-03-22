import React, { Component } from 'react';

interface Props {
  reference: React.RefObject<HTMLSelectElement>;
  isError: boolean;
}

export class CustomSelect extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="input__wrap">
          <label>Favorite programming language</label>
          <select defaultValue="" ref={this.props.reference}>
            <option disabled value=""></option>
            <option value="JS">JS</option>
            <option value="Pascal">Pascal</option>
          </select>
        </div>
        {this.props.isError && <p className="error">Please choose favorite language</p>}
      </div>
    );
  }
}

export default CustomSelect;
