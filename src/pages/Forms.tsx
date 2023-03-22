import React, { Component } from 'react';
import '../styles/forms.scss';

const genders = ['Male', 'Female', 'Other'];

export class Forms extends Component {
  submitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log('kek');
  }

  render() {
    return (
      <div className="forms">
        <form className="form">
          <div>
            <label>Nickname:</label>
            <input type="text" />
          </div>
          <div>
            <label>What day was yesterday?</label>
            <input type="date" />
          </div>
          <div>
            <label>Favorite programming language:</label>
            <select>
              <option value="JS">JS</option>
              <option value="Pascal">Pascal</option>
            </select>
          </div>
          <div>
            <label>What&#39;s your gender?</label>
            <div>
              {genders.map((gender) => (
                <div key={gender}>
                  <input type="radio" name="gender" value={gender} />
                  <label>{gender}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <input type="file" accept=".png, .jpg, .jpeg" />
          </div>
          <div>
            <input type="checkbox" />
            <label>I agree to the processing of personal data</label>
          </div>
          <button className="btn" onClick={this.submitForm}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
