import { rest } from 'msw';

const urlGame = `https://api.rawg.io/api/games/1`;
const urlGames = `https://api.rawg.io/api/games`;

export const gameHandlers = [
  rest.get(urlGame, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: 'gta',
        description_raw: 'best game in the world',
        metacritic: 100,
        released: '22-02-2015',
        background_image:
          'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
      })
    );
  }),
];

export const gamesHandlers = [
  rest.get(urlGames, (req, res, ctx) => {
    return res(
      ctx.json({
        count: 1,
        results: [
          {
            id: 1,
            name: 'gta',
            background_image:
              'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
          },
        ],
      })
    );
  }),
];
