import {ActionType} from '../types/action';
import {AppRoute, AuthorizationStatus} from '../const';
import {Film} from '../types/film';
import {User} from '../types/user';

export const loadPromoFilm = (film: Film) => ({
  type: ActionType.LoadPromoFilm,
  payload: film,
}as const);

export const loadFilms = (films: Film[]) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const changeLimitCounter = () => ({
  type: ActionType.ChangeLimitCounter,
} as const);

export const changeFilmNumberLimit = () => ({
  type: ActionType.ChangeFilmNumberLimit,
} as const);

export const resetFilmNumberLimit = () => ({
  type: ActionType.ResetFilmNumberLimit,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const changeUser = (user: User) => ({
  type: ActionType.ChangeUser,
  payload: user,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
