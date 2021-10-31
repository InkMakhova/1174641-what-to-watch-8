import {Film} from './film';

export enum ActionType {
  ChangeGenre = 'filmList/changeGenre',
  GetFilms = 'filmList/getFilms',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type GetFilmsAction = {
  type: ActionType.GetFilms;
  payload: Film[];
};

export type Actions = ChangeGenreAction | GetFilmsAction;
