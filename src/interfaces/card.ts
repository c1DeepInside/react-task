export interface IAPIRequest {
  count: number;
  results: IGameList[];
}

export interface IGameList {
  id: number;
  name: string;
  background_image: string;
}

export interface IGame {
  id: number;
  name: string;
  description_raw: string;
  metacritic: number;
  released: string;
  background_image: string;
}
