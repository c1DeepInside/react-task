import React from 'react';
import { useForm } from 'react-hook-form';
import { FormCard } from '../../interfaces/forms';
import { dateValidation } from '../../utils/validation';

interface Props {
  addCard: (card: FormCard) => void;
}

function CustomForm(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ mode: 'onSubmit' });

  const name: string = watch('name');
  const date: Date = watch('date');
  const file: FileList = watch('file');
  const language: string = watch('language');
  const gender: string = watch('gender');

  const onSubmit = () => {
    props.addCard({
      id: Date.now(),
      name: name,
      date: date.toString(),
      file: URL.createObjectURL(file[0]),
      language: language,
      gender: gender,
    });
    reset();
  };

  const dateValid = () => {
    return dateValidation(date.toString());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="input__wrap">
        <label>Nickname</label>
        <input type="text" {...register('name', { required: true, pattern: /^\S*$/ })} />
      </div>
      {errors.name && (
        <p className="error">Please enter the nickname (there should be no spaces)</p>
      )}

      <div className="input__wrap">
        <label>What day was yesterday?</label>
        <input type="date" {...register('date', { required: true, validate: { dateValid } })} />
      </div>
      {errors.date && <p className="error">Please enter the correct date of yesterday</p>}

      <div className="input__wrap">
        <label>Choose a picture for your avatar</label>
        <input accept=".png, .jpg, .jpeg" type="file" {...register('file', { required: true })} />
      </div>
      {errors.file && <p className="error">Please select a picture</p>}

      <div>
        <div className="input__wrap">
          <label>Favorite programming language</label>
          <select defaultValue="" {...register('language', { required: true })}>
            <option disabled value=""></option>
            <option value="JS">JS</option>
            <option value="Pascal">Pascal</option>
          </select>
        </div>
      </div>
      {errors.language && <p className="error">Please choose favorite language</p>}

      <div>
        <div className="genders__wrap">
          <label>What&#39;s your gender?</label>
          <div className="input__wrap">
            <div className="gender__wrap">
              <input
                className="input"
                type="radio"
                value="male"
                {...register('gender', { required: true })}
              />
              <label>Male</label>
            </div>
            <div className="gender__wrap">
              <input
                className="input"
                type="radio"
                value="female"
                {...register('gender', { required: true })}
              />
              <label>Female</label>
            </div>
            <div className="gender__wrap">
              <input
                className="input"
                type="radio"
                value="other"
                {...register('gender', { required: true })}
              />
              <label>Other</label>
            </div>
          </div>
        </div>
      </div>
      {errors.gender && <p className="error">Please enter a gender</p>}

      <div className="input__wrap">
        <label>I agree to the processing of personal data</label>
        <input type="checkbox" {...register('agree', { required: true })} />
      </div>
      {errors.agree && <p className="error">To continue, you must agree to data processing</p>}

      <button className="btn submit__btn">Submit</button>
    </form>
  );
}

export default CustomForm;
