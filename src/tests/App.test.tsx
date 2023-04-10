import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { beforeEach, describe, expect, test } from 'vitest';

import { router } from '../router/router';
import { store } from '../store/store';

describe('default test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });

  test('should show right page', () => {
    const cards = screen.getByTestId('cards_link') as HTMLAnchorElement;
    const about = screen.getByTestId('aboutus_link') as HTMLAnchorElement;
    const forms = screen.getByTestId('forms_link') as HTMLAnchorElement;
    const text = screen.getByTestId('page_name') as HTMLParagraphElement;

    if (cards && about && forms && text) {
      fireEvent.click(cards);

      expect(text).toHaveTextContent('Cards');

      fireEvent.click(about);

      expect(text).toHaveTextContent('About us');

      fireEvent.click(forms);

      expect(text).toHaveTextContent('Forms');
    }
  });
});
