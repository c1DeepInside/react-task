import { ValidationFields, ValidationResult } from '../interfaces/forms';

export function validation(validationFields: ValidationFields): ValidationResult {
  return {
    name: nameValidation(validationFields.name!),
    date: dateValidation(validationFields.date!),
    file: fileValidation(validationFields.file!),
    gender: genderValidation(
      validationFields.other!,
      validationFields.male!,
      validationFields.female!
    ),
    language: languageValidation(validationFields.language!),
    agree: !validationFields.agree!,
  };
}

function nameValidation(name: string): boolean {
  return !(!!name && !name.includes(' '));
}

function dateValidation(date: string): boolean {
  if (!date) {
    return !date;
  }
  const userDate: Date = new Date(date);
  const yesterday: Date = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return !(
    yesterday.getUTCDate() === userDate.getUTCDate() &&
    yesterday.getUTCMonth() === userDate.getUTCMonth() &&
    yesterday.getUTCFullYear() === userDate.getUTCFullYear()
  );
}

function fileValidation(file: string): boolean {
  return !file;
}

function languageValidation(language: string): boolean {
  return !language;
}

function genderValidation(other: boolean, male: boolean, female: boolean): boolean {
  return !(other || male || female);
}
