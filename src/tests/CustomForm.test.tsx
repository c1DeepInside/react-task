import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { beforeEach, describe, expect, test } from 'vitest';

import { router } from '../router/router';
import { store } from '../store/store';
import { server } from './mocks/server';

describe('default test', () => {
  beforeAll(() => server.listen());

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  beforeEach(() => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });

  test('should show inputs', () => {
    const forms = screen.getByTestId('forms_link') as HTMLAnchorElement;

    fireEvent.click(forms);
    expect(screen.getAllByText(/nickname/i)).toBeDefined();
    expect(screen.getAllByText(/What day was yesterday?/i)).toBeDefined();
    expect(screen.getAllByText(/Choose a picture for your avatar/i)).toBeDefined();
    expect(screen.getAllByText(/Favorite programming language/i)).toBeDefined();
    expect(screen.getAllByText(/I agree to the processing of personal data/i)).toBeDefined();
    expect(screen.getAllByText(/What's your gender?/i)).toBeDefined();
  });
});
