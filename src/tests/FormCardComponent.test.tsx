import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

import FormCardComponent from '../components/forms/FromCardComponent/FormCardComponent';
import { FormCard } from '../interfaces/forms';

const card: FormCard = {
  id: 1,
  name: 'kotek',
  date: '2022-05-15',
  file: 'https://i.pinimg.com/originals/e3/41/40/e34140dc81a93041f8ae93e6b87b3c6c.jpg',
  language: 'JS',
  gender: 'Female',
};

describe('default test', () => {
  beforeEach(() => {
    render(<FormCardComponent card={card} />);
  });

  test('should render card', () => {
    expect(screen.getAllByText(/kotek/i)).toBeDefined();
    expect(screen.getAllByText(/JS/i)).toBeDefined();
    expect(screen.getAllByText(/2022-05-15/i)).toBeDefined();
    expect(screen.getAllByText(/Female/i)).toBeDefined();
  });
});
