import { setupServer } from 'msw/node';

import { gameHandlers, gamesHandlers } from './getGame';

export const server = setupServer(...gameHandlers, ...gamesHandlers);
