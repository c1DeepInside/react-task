import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import CardsComponent from '../components/cards/CardsComponent';

describe('default test', () => {
  beforeEach(() => {
    render(<CardsComponent />);
  });

  test('should render cards component', () => {
    expect(screen.getAllByText(/Cards:/i)).toBeDefined();
  });

  test('should show cards info', () => {
    expect(screen.getAllByText(/Anti-mage/i)).toBeDefined();
    expect(screen.getAllByText(/Pudge/i)).toBeDefined();
    expect(screen.getAllByText(/Phantom assassin/i)).toBeDefined();
    expect(screen.getAllByText(/Morphling/i)).toBeDefined();
  });
});
