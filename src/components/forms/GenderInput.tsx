import React from 'react';
import { GenderProps } from '../../interfaces/forms';

interface Props {
  genderProps: GenderProps[];
  isError: boolean;
}

function GenderInput(props: Props) {
  return (
    <div>
      <div className="genders__wrap">
        <label>What&#39;s your gender?</label>
        <div className="input__wrap">
          {props.genderProps.map((gender) => (
            <div key={gender.name} className="gender__wrap">
              <input
                className="input"
                type="radio"
                name="gender"
                value={gender.name}
                ref={gender.reference}
              />
              <label>{gender.name}</label>
            </div>
          ))}
        </div>
      </div>
      {props.isError && <p className="error">Please enter a gender</p>}
    </div>
  );
}

export default GenderInput;
