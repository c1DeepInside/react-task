import React, { Component } from 'react';
import CustomInput from '../components/forms/CustomInput';
import CustomSelect from '../components/forms/CustomSelect';
import GenderInput from '../components/forms/GenderInput';
import { Field, GenderProps, ValidationFields, ValidationResult } from '../interfaces/forms';
import '../styles/forms.scss';
import { validation } from '../utils/validation';

interface Props {
  text?: string;
}

interface Errors {
  gender: boolean;
  language: boolean;
}

interface State {
  errors: Errors;
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
      errors: {
        gender: false,
        language: false,
      },
      formFields: [
        {
          id: 1,
          reference: this.nameRef,
          type: 'text',
          errorText: 'Please enter the nickname (there should be no spaces)',
          description: 'Nickname',
          isError: false,
        },
        {
          id: 2,
          reference: this.dateRef,
          type: 'date',
          errorText: 'Please enter the correct date of yesterday',
          description: 'What day was yesterday?',
          isError: false,
        },
        {
          id: 3,
          reference: this.fileRef,
          type: 'file',
          errorText: 'Please select a picture',
          description: 'Choose a picture for your avatar',
          accept: '.png, .jpg, .jpeg',
          isError: false,
        },
        {
          id: 4,
          reference: this.agreeRef,
          type: 'checkbox',
          errorText: 'To continue, you must agree to data processing',
          description: 'I agree to the processing of personal data',
          isError: false,
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
    const validationFields: ValidationFields = {
      name: this.nameRef.current?.value,
      date: this.dateRef.current?.value,
      file: this.fileRef.current?.value,
      language: this.languageRef.current?.value,
      other: this.otherGenderRef.current?.checked,
      male: this.maleGenderRef.current?.checked,
      female: this.femaleGenderRef.current?.checked,
      agree: this.agreeRef.current?.checked,
    };
    const validationResult: ValidationResult = validation(validationFields);
    console.log(validationResult);
  };

  render() {
    return (
      <div className="forms">
        <form className="form">
          {this.state.formFields.map((field) => {
            if (field.id < this.state.formFields.length) {
              return <CustomInput field={field} isError={field.isError} key={field.id} />;
            }
          })}
          <CustomSelect reference={this.languageRef} isError={this.state.errors.language} />
          <GenderInput genderProps={this.state.genderProps} isError={this.state.errors.gender} />
          <CustomInput
            field={this.state.formFields[this.state.formFields.length - 1]}
            isError={this.state.formFields[this.state.formFields.length - 1].isError}
          />
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
