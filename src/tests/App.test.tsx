import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { router } from '../router/router';

describe('default test', () => {
  beforeEach(() => {
    render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  });

  test('should show right page', () => {
    const cards = screen.getByTestId('cards_link') as HTMLAnchorElement;
    const about = screen.getByTestId('aboutus_link') as HTMLAnchorElement;
    const forms = screen.getByTestId('forms_link') as HTMLAnchorElement;
    const text = screen.getByTestId('page_name') as HTMLParagraphElement;

    if (cards && about && forms && text) {
      fireEvent.click(cards);

      expect(text);

      fireEvent.click(about);

      expect(text).toContain('About us');

      fireEvent.click(forms);

      expect(text).toContain('Forms');
    }
  });
});
