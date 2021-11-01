import {Film} from './film';
import {AuthorizationStatus} from '../const';

export enum ActionType {
  LoadFilms = 'data/loadFilms',
  ChangeGenre = 'filmList/changeGenre',
  ChangeLimitCounter = 'filmList/changeLimitCounter',
  ChangeFilmNumberLimit = 'filmList/changeFilmNumberLimit',
  ResetFilmNumberLimit = 'filmList/resetFilmNumberLimit',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type LoadFilms = {
  type: ActionType.LoadFilms;
  payload: Film[];
};

export type ChangeGenre = {
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

export type RequireAuthorization = {
  type: ActionType.RequireAuthorization,
  payload: AuthorizationStatus,
}

export type RequireLogout = {
  type: ActionType.RequireLogout,
};

export type Actions =
  | LoadFilms
  | ChangeGenre
  | ChangeLimitCounter
  | ChangeFilmNumberLimit
  | ResetFilmNumberLimit
  | RequireAuthorization
  | RequireLogout;
