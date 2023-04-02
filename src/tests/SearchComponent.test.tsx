import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import SearchComponent from '../components/cards/SearchComponent';

describe('default test', () => {
  test('should show text', () => {
    render(<SearchComponent />);
    const input = screen.getByTestId('search__input') as HTMLInputElement;
    expect(input).toBeTruthy();

    if (input) {
      input.textContent = 'kek';
      expect(input.textContent).toBe('kek');

      expect(input.type).toBe('text');

      fireEvent.change(input, {
        target: {
          value: 'lol',
        },
      });
      expect(input.value).toBe('lol');
    }
  });
});
