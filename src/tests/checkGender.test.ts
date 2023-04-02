import { describe, expect, test } from 'vitest';
import { checkGender } from '../utils/checkGender';

describe('default test', () => {
  test('should give male gender', () => {
    const male = true;
    const female = false;
    const other = false;
    expect(checkGender(other, male, female) === 'Male').toBeTruthy();
  });

  test('should give female gender', () => {
    const male = false;
    const female = true;
    const other = false;
    expect(checkGender(other, male, female) === 'Female').toBeTruthy();
  });

  test('should give other gender', () => {
    const male = false;
    const female = false;
    const other = true;
    expect(checkGender(other, male, female) === 'Other').toBeTruthy();
  });

  test('should give "" gender', () => {
    const male = false;
    const female = false;
    const other = false;
    expect(checkGender(other, male, female) === '').toBeTruthy();
  });
});
