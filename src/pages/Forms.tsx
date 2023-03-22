import React, { Component } from 'react';
import CustomInput from '../components/forms/CustomInput';
import CustomSelect from '../components/forms/CustomSelect';
import GenderInput from '../components/forms/GenderInput';
import { Field, GenderProps } from '../interfaces/forms';
import '../styles/forms.scss';

enum errorsName {
  name = 'name',
  date = 'date',
  gender = 'gender',
  agree = 'agree',
  language = 'language',
  file = 'file',
}

interface Props {
  text?: string;
}

interface State {
  errors: string[];
  formFields: Field[];
  genderProps: GenderProps[];
}

export class Forms extends Component<Props, State> {
  private nameRef: React.RefObject<HTMLInputElement>;
  private dateRef: React.RefObject<HTMLInputElement>;
  private languageRef: React.RefObject<HTMLSelectElement>;
  private maleGenderRef: React.RefObject<HTMLInputElement>;
  private femaleGenderRef: React.RefObject<HTMLInputElement>;
  private otherGenderRef: React.RefObject<HTMLInputElement>;
  private fileRef: React.RefObject<HTMLInputElement>;
  private agreeRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.nameRef = React.createRef();
    this.dateRef = React.createRef();
    this.languageRef = React.createRef();
    this.maleGenderRef = React.createRef();
    this.femaleGenderRef = React.createRef();
    this.otherGenderRef = React.createRef();
    this.fileRef = React.createRef();
    this.agreeRef = React.createRef();
    this.state = {
      errors: [],
      formFields: [
        {
          id: 1,
          reference: this.nameRef,
          type: 'text',
          errorText: 'Please enter the nickname',
          description: 'Nickname',
        },
        {
          id: 2,
          reference: this.dateRef,
          type: 'date',
          errorText: 'Please enter the correct date of yesterday',
          description: 'What day was yesterday?',
        },
        {
          id: 3,
          reference: this.fileRef,
          type: 'file',
          errorText: 'Please select a picture',
          description: 'Choose a picture for your avatar',
          accept: '.png, .jpg, .jpeg',
        },
        {
          id: 4,
          reference: this.agreeRef,
          type: 'checkbox',
          errorText: 'To continue, you must agree to data processing',
          description: 'I agree to the processing of personal data',
        },
      ],
      genderProps: [
        {
          reference: this.maleGenderRef,
          name: 'Male',
        },
        {
          reference: this.femaleGenderRef,
          name: 'Female',
        },
        {
          reference: this.otherGenderRef,
          name: 'Other',
        },
      ],
    };
  }

  submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(this.nameRef.current?.value);
    console.log(this.dateRef.current?.value);
  };

  render() {
    return (
      <div className="forms">
        <form className="form">
          {this.state.formFields.map((field) => (
            <CustomInput field={field} isError={false} key={field.id} />
          ))}
          <CustomSelect reference={this.languageRef} isError={false} />
          <GenderInput genderProps={this.state.genderProps} isError={false} />
          <button className="btn submit__btn" onClick={this.submitForm}>
            Submit
          </button>
          <p className="form_text">All fields are required</p>
        </form>
        <hr className="hr" />
      </div>
    );
  }
}

export default Forms;
