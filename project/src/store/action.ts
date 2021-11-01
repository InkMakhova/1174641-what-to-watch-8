import {ActionType} from '../types/action';
import {AuthorizationStatus} from '../const';
import {Film} from '../types/film';

export const loadFilms = (films: Film[]) => ({
  type: ActionType.LoadFilms,
  payload: films,
});

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const changeLimitCounter = () => ({
  type: ActionType.ChangeLimitCounter,
});

export const changeFilmNumberLimit = () => ({
  type: ActionType.ChangeFilmNumberLimit,
});

export const resetFilmNumberLimit = () => ({
  type: ActionType.ResetFilmNumberLimit,
});

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
});
