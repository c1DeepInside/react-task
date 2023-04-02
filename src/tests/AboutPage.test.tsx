import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import About from '../pages/AboutPage';

describe('default test', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('should render info', () => {
    expect(screen.getAllByText(/I wont tell you anything about us/i)).toBeDefined();
  });
});
