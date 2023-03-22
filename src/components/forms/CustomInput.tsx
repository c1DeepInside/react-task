import React, { Component } from 'react';
import { Field } from '../../interfaces/forms';

interface Props {
  field: Field;
  isError: boolean;
}

export class CustomInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="input__wrap">
          <label>{this.props.field.description}</label>
          <input
            type={this.props.field.type}
            ref={this.props.field.reference}
            accept={this.props.field.accept}
          />
        </div>
        {this.props.isError && <p className="error">{this.props.field.errorText}</p>}
      </div>
    );
  }
}

export default CustomInput;
