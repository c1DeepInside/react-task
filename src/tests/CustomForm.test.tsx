import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import CustomForm from '../components/forms/CustomForm';

describe('default test', () => {
  beforeEach(() => {
    render(
      <CustomForm
        addCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
  });

  test('should show inputs', () => {
    expect(screen.getAllByText(/nickname/i)).toBeDefined();
    expect(screen.getAllByText(/What day was yesterday?/i)).toBeDefined();
    expect(screen.getAllByText(/Choose a picture for your avatar/i)).toBeDefined();
    expect(screen.getAllByText(/Favorite programming language/i)).toBeDefined();
    expect(screen.getAllByText(/I agree to the processing of personal data/i)).toBeDefined();
    expect(screen.getAllByText(/What's your gender?/i)).toBeDefined();
  });
});
