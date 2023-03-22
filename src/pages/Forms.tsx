import React, { Component } from 'react';
import '../styles/forms.scss';

const genders = ['Male', 'Female', 'Other'];
enum errorsName {
  name = 'name',
  date = 'date',
  gender = 'gender',
  agree = 'agree',
}

interface Props {
  text?: string;
}

interface State {
  errors: string[];
}

export class Forms extends Component<Props, State> {
  private nickRef: React.RefObject<HTMLInputElement>;
  private dateRef: React.RefObject<HTMLInputElement>;
  private languageRef: React.RefObject<HTMLSelectElement>;
  private genderRef: React.RefObject<HTMLInputElement>;
  private fileRef: React.RefObject<HTMLInputElement>;
  private agreeRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.nickRef = React.createRef();
    this.dateRef = React.createRef();
    this.languageRef = React.createRef();
    this.genderRef = React.createRef();
    this.fileRef = React.createRef();
    this.agreeRef = React.createRef();
    this.state = {
      errors: [],
    };
  }

  submitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="forms">
        <form className="form">
          <div className="input__wrap">
            <label>Nickname*</label>
            <input type="text" ref={this.nickRef} />
          </div>
          {this.state.errors.includes(errorsName.name) && (
            <p className="error">Please enter a nickname</p>
          )}
          <div className="input__wrap">
            <label>What day was yesterday?*</label>
            <input type="date" ref={this.dateRef} />
          </div>
          {this.state.errors.includes(errorsName.date) && (
            <p className="error">Please enter the correct date of yesterday</p>
          )}
          <div className="input__wrap">
            <label>Favorite programming language</label>
            <select ref={this.languageRef}>
              <option value="JS">JS</option>
              <option value="Pascal">Pascal</option>
            </select>
          </div>
          <div className="genders__wrap">
            <label>What&#39;s your gender?*</label>
            <div className="input__wrap">
              {genders.map((gender) => (
                <div key={gender} className="gender__wrap">
                  <input type="radio" name="gender" value={gender} />
                  <label>{gender}</label>
                </div>
              ))}
            </div>
          </div>
          {this.state.errors.includes(errorsName.gender) && (
            <p className="error">Please enter a gender</p>
          )}
          <div className="input__wrap">
            <label>Choose a picture for your avatar</label>
            <input type="file" accept=".png, .jpg, .jpeg" ref={this.fileRef} />
          </div>
          <div className="input__wrap">
            <input type="checkbox" ref={this.agreeRef} />
            <label>I agree to the processing of personal data*</label>
          </div>
          {this.state.errors.includes(errorsName.agree) && (
            <p className="error">To continue, you must agree to data processing</p>
          )}
          <button className="btn submit__btn" onClick={this.submitForm}>
            Submit
          </button>
          <p className="form_text">Fields with (*) are required</p>
        </form>
        <hr className="hr" />
      </div>
    );
  }
}

export default Forms;
