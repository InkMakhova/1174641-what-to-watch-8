import {Film} from './film';

export enum ActionType {
  ChangeGenre = 'filmList/changeGenre',
  GetFilms = 'filmList/getFilms',
  ChangeLimitCounter = 'filmList/changeLimitCounter',
  ChangeFilmNumberLimit = 'filmList/changeFilmNumberLimit',
  ResetFilmNumberLimit = 'filmList/resetFilmNumberLimit',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type GetFilmsAction = {
  type: ActionType.GetFilms;
  payload: Film[];
};

export type ChangeLimitCounter = {
  type: ActionType.ChangeLimitCounter;
}

export type ChangeFilmNumberLimit = {
  type: ActionType.ChangeFilmNumberLimit;
}

export type ResetFilmNumberLimit = {
  type: ActionType.ResetFilmNumberLimit;
}

export type Actions =
  ChangeGenreAction |
  GetFilmsAction |
  ChangeLimitCounter |
  ChangeFilmNumberLimit |
  ResetFilmNumberLimit;
