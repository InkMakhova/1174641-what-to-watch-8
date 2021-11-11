import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';
import {
  loadPromoFilm,
  loadFilms,
  loadFilm,
  loadSimilarFilms,
  loadComments,
  changeGenre,
  changeLimitCounter,
  changeFilmNumberLimit,
  resetFilmNumberLimit,
  requireAuthorization,
  requireLogout,
  changeUser,
  redirectToRoute} from '../store/action';

export enum ActionType {
  LoadPromoFilm = 'data/loadPromoFilm',
  LoadFilms = 'data/loadFilms',
  LoadFilm = 'data/loadFilm',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadComments = 'data/loadComments',
  ChangeGenre = 'filmList/changeGenre',
  ChangeLimitCounter = 'filmList/changeLimitCounter',
  ChangeFilmNumberLimit = 'filmList/changeFilmNumberLimit',
  ResetFilmNumberLimit = 'filmList/resetFilmNumberLimit',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  ChangeUser = 'user/user',
  RedirectToRoute = 'filmList/redirectToRoute',
}

export type Actions =
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadComments>
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof changeLimitCounter>
  | ReturnType<typeof changeFilmNumberLimit>
  | ReturnType<typeof resetFilmNumberLimit>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof changeUser>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
