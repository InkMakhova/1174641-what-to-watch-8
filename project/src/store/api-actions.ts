import {ThunkActionResult} from '../types/action';
import {
  changeUser,
  loadFilms,
  loadPromoFilm,
  requireAuthorization,
  requireLogout,
  redirectToRoute} from './action';
import {dropToken, saveToken} from '../services/token';
import {
  APIRoute,
  AuthorizationStatus,
  AppRoute} from '../const';
import {Film} from '../types/film';
import {AuthData} from '../types/auth-data';
import {HttpCode} from '../services/api';
import {UserFromServer} from '../types/user';
import {adaptToClientFilm, adaptToClientUser} from '../services/adapter';
import {initialUser} from './reducer';

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    const adaptedData = adaptToClientFilm(data);
    dispatch(loadPromoFilm(adaptedData));
  };

export const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    const adaptedData = data.map((film) => adaptToClientFilm(film));
    dispatch(loadFilms(adaptedData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(({status, data}) => {
        if (status && status !== HttpCode.Unauthorized) {
          dispatch(requireAuthorization(AuthorizationStatus.Auth));
          dispatch(changeUser(adaptToClientUser(data)));
          return;
        }
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      });
  };

export const loginAction = ({login: email, password: password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<UserFromServer>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(changeUser(adaptToClientUser(data)));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyList));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
    dispatch(changeUser(initialUser));
  };
