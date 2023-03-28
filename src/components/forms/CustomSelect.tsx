import React from 'react';

interface Props {
  reference: React.RefObject<HTMLSelectElement>;
  isError: boolean;
}

function CustomSelect(props: Props) {
  return (
    <div>
      <div className="input__wrap">
        <label>Favorite programming language</label>
        <select defaultValue="" ref={props.reference}>
          <option disabled value=""></option>
          <option value="JS">JS</option>
          <option value="Pascal">Pascal</option>
        </select>
      </div>
      {props.isError && <p className="error">Please choose favorite language</p>}
    </div>
  );
}

export default CustomSelect;
