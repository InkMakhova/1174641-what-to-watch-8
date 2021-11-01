import {Film} from './film';

export enum ActionType {
  LoadFilms = 'data/loadFilms',
  ChangeGenre = 'filmList/changeGenre',
  ChangeLimitCounter = 'filmList/changeLimitCounter',
  ChangeFilmNumberLimit = 'filmList/changeFilmNumberLimit',
  ResetFilmNumberLimit = 'filmList/resetFilmNumberLimit',
}

export type LoadFilms = {
  type: ActionType.LoadFilms;
  payload: Film[];
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
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
  LoadFilms |
  ChangeGenreAction |
  ChangeLimitCounter |
  ChangeFilmNumberLimit |
  ResetFilmNumberLimit;
