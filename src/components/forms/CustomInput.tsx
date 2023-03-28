import React from 'react';
import { Field } from '../../interfaces/forms';

interface Props {
  field: Field;
  isError: boolean;
}

function CustomInput(props: Props) {
  return (
    <div>
      <div className="input__wrap">
        <label>{props.field.description}</label>
        <input type={props.field.type} ref={props.field.reference} accept={props.field.accept} />
      </div>
      {props.isError && <p className="error">{props.field.errorText}</p>}
    </div>
  );
}

export default CustomInput;
