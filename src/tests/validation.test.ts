import { describe, expect, test } from 'vitest';
import { dateValidation } from '../utils/validation';

describe('default test', () => {
  test('should validate', () => {
    const yesterday: Date = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    expect(dateValidation(yesterday.toString())).toEqual(true);
  });

  test('should validate', () => {
    const day: Date = new Date();

    expect(dateValidation(day.toString())).toEqual(false);
  });
});
