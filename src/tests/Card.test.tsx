import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Card from '../components/cards/Card';
import { ICard } from '../interfaces/card';

const card: ICard = {
  id: 1,
  name: 'Anti-mage',
  description:
    'Should Anti-Mage have the opportunity to gather his full strength, few can stop his assaults. Draining mana from enemies with every strike or teleporting short distances to escape an ambush, cornering him is a challenge for any foe.',
  image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
  likes: 55,
};

describe('default test', () => {
  test('should show card info', () => {
    render(<Card card={card} />);
    expect(screen.getAllByText(/Anti-mage/i)).toBeDefined();
  });
});
