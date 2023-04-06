import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { beforeEach, describe, expect, test } from 'vitest';

import { router } from '../router/router';
import { server } from './mocks/server';

describe('default test', () => {
  beforeAll(() => server.listen());

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  beforeEach(() => {
    render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  });

  test('should show games', async () => {
    const search = screen.getByTestId('search__form') as HTMLFormElement;
    fireEvent.submit(search);
    await waitFor(() => {
      expect(screen.getAllByText(/gta/i)).toBeDefined();
    });

    const game = screen.getByTestId('game_1') as HTMLElement;
    if (game) {
      fireEvent.click(game);
      await waitFor(() => {
        expect(screen.getAllByText(/gta/i)).toBeDefined();
        expect(screen.getAllByText(/best game in the world/i)).toBeDefined();
        expect(screen.getAllByText(/Released: 22-02-2015/i)).toBeDefined();
        expect(screen.getAllByText(/Metascore: 100/i)).toBeDefined();
      });
    }
  });
});
