import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import GameModal from '../components/cards/GameModal';
import { IGame } from '../interfaces/card';

const game: IGame = {
  id: 1,
  name: 'game',
  background_image:
    'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
  description_raw: 'best game',
  metacritic: 228,
  released: '22-02-2018',
};

const close = () => {};

describe('default test', () => {
  test('should show game info', () => {
    render(<GameModal game={game} isShowLoader={false} closeModal={close} />);
    expect(screen.getAllByText(/game/i)).toBeDefined();
    expect(screen.getAllByText(/best game/i)).toBeDefined();
    expect(screen.getAllByText(/Released: 22-02-2018/i)).toBeDefined();
    expect(screen.getAllByText(/Metascore: 228/i)).toBeDefined();
  });

  test('should show no data', () => {
    render(<GameModal game={undefined} isShowLoader={false} closeModal={close} />);
    expect(screen.getAllByText(/game not found/i)).toBeDefined();
  });

  test('should show no data', () => {
    render(<GameModal game={game} isShowLoader={true} closeModal={close} />);
    const loader = screen.getByTestId('modal__loader') as HTMLDivElement;
    expect(loader).toBeDefined();
  });
});
