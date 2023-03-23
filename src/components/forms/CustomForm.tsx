import React, { Component } from 'react';
import {
  Field,
  FormCard,
  GenderProps,
  ValidationFields,
  ValidationResult,
} from '../../interfaces/forms';
import { checkGender } from '../../utils/checkGender';
import { validation } from '../../utils/validation';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import GenderInput from './GenderInput';

interface Props {
  addCard: (card: FormCard) => void;
}

interface State {
  errors: ValidationResult;
  formFields: Field[];
  genderProps: GenderProps[];
  successCreate: boolean;
}

class CustomForm extends Component<Props, State> {
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
        name: false,
        date: false,
        file: false,
        gender: false,
        language: false,
        agree: false,
      },
      successCreate: false,
      formFields: [
        {
          id: 1,
          reference: this.nameRef,
          type: 'text',
          errorText: 'Please enter the nickname (there should be no spaces)',
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
    this.setState({
      errors: validationResult,
    });
    if (Object.values(validationResult).every((e: boolean) => !e)) {
      const file = URL.createObjectURL(this.fileRef.current?.files?.[0] as File);
      this.props.addCard({
        id: Date.now(),
        name: validationFields.name!,
        date: validationFields.date!,
        file: file,
        language: validationFields.language!,
        gender: checkGender(
          validationFields.other!,
          validationFields.male!,
          validationFields.female!
        ),
      });
    }
  };

  render() {
    return (
      <form className="form">
        {this.state.formFields.map((field, index) => {
          if (field.id < this.state.formFields.length) {
            return (
              <CustomInput
                field={field}
                isError={Object.values(this.state.errors)[index]}
                key={field.id}
              />
            );
          }
        })}
        <CustomSelect reference={this.languageRef} isError={this.state.errors.language} />
        <GenderInput genderProps={this.state.genderProps} isError={this.state.errors.gender} />
        <CustomInput
          field={this.state.formFields[this.state.formFields.length - 1]}
          isError={Object.values(this.state.errors)[Object.entries(this.state.errors).length - 1]}
        />
        <button className="btn submit__btn" onClick={this.submitForm}>
          Submit
        </button>
        <p className="form_text">All fields are required</p>
      </form>
    );
  }
}

export default CustomForm;
