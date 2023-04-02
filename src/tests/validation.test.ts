import { describe, expect, test } from 'vitest';
import { ValidationFields, ValidationResult } from '../interfaces/forms';
import { validation } from '../utils/validation';

describe('default test', () => {
  test('should validate', () => {
    const yesterday: Date = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const validationFields: ValidationFields = {
      name: 'kek',
      date: yesterday.toString(),
      file: 'file',
      language: 'JS',
      male: false,
      female: true,
      other: false,
      agree: true,
    };

    const validationResult: ValidationResult = {
      name: false,
      date: false,
      file: false,
      agree: false,
      language: false,
      gender: false,
    };

    expect(validation(validationFields)).toEqual(validationResult);
  });

  test('should validate', () => {
    const validationFields: ValidationFields = {
      name: 'kek kekov',
      date: '',
      file: '',
      language: '',
      male: false,
      female: false,
      other: false,
      agree: false,
    };

    const validationResult: ValidationResult = {
      name: true,
      date: true,
      file: true,
      agree: true,
      language: true,
      gender: true,
    };

    expect(validation(validationFields)).toEqual(validationResult);
  });
});
