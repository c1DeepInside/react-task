import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Card from '../components/cards/Card';
import { IGameList } from '../interfaces/card';

const game: IGameList = {
  id: 1,
  name: 'Anti-mage',
  background_image:
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
};

const onClick = () => () => {};

describe('default test', () => {
  test('should show card info', () => {
    render(<Card game={game} onClick={onClick} />);
    expect(screen.getAllByText(/Anti-mage/i)).toBeDefined();
  });
});
