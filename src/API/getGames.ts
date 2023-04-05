import { IAPIRequest } from '../interfaces/card';

const key = '90a7c29c997c49589b8db727a87a7270';

export async function getGames(search: string, page_size = 50): Promise<IAPIRequest> {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${key}&page_size=${page_size}&search=${search}`
  );
  return response.json();
}
