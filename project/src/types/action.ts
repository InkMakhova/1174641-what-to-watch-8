import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';
import {
  loadFilms,
  changeGenre,
  changeLimitCounter,
  changeFilmNumberLimit,
  resetFilmNumberLimit,
  requireAuthorization,
  requireLogout} from '../store/action';

export enum ActionType {
  LoadFilms = 'data/loadFilms',
  ChangeGenre = 'filmList/changeGenre',
  ChangeLimitCounter = 'filmList/changeLimitCounter',
  ChangeFilmNumberLimit = 'filmList/changeFilmNumberLimit',
  ResetFilmNumberLimit = 'filmList/resetFilmNumberLimit',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof changeLimitCounter>
  | ReturnType<typeof changeLimitCounter>
  | ReturnType<typeof changeFilmNumberLimit>
  | ReturnType<typeof resetFilmNumberLimit>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
