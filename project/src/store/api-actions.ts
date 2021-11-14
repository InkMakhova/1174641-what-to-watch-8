import {ThunkActionResult} from '../types/action';
import {
  changeUser,
  loadFilms,
  loadPromoFilm,
  loadFilm,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  loadSimilarFilms,
  loadComments,
  loadFavoriteFilms,
  resetFavoriteFilms
} from './action';
import {dropToken, saveToken} from '../services/token';
import {
  APIRoute,
  AuthorizationStatus,
  AppRoute,
  initialUser} from '../const';
import {FavoriteFilm, Film} from '../types/film';
import {AuthData} from '../types/auth-data';
import {HttpCode} from '../services/api';
import {UserFromServer} from '../types/user';
import {adaptToClientFilm, adaptToClientUser} from '../services/adapter';
import {FilmReview} from '../types/film-review';
import {ReviewData} from '../types/review-data';
import {store} from '../index';

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    const adaptedData = adaptToClientFilm(data);
    dispatch(loadPromoFilm(adaptedData));
  };

export const fetchFilmInfoAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get<Film>(`${APIRoute.Films}/${filmId}`)
      .then(({status, data}) => {
        const adaptedData = adaptToClientFilm(data);
        dispatch(loadFilm(adaptedData));
      }).catch(() => {
        dispatch(redirectToRoute(AppRoute.Page404));
      });
  };

export const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    const adaptedData = data.map((film) => adaptToClientFilm(film));
    dispatch(loadFilms(adaptedData));
  };

export const fetchSimilarFilmsAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
    const adaptedData = data.map((film) => adaptToClientFilm(film));
    dispatch(loadSimilarFilms(adaptedData));
  };

export const fetchCommentsAction = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmReview[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(loadComments(data));
  };

export const fetchFavoriteFilms = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    const adaptedData = data.map((film) => adaptToClientFilm(film));
    dispatch(loadFavoriteFilms(adaptedData));
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

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
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
    dispatch(resetFavoriteFilms());
  };

export const reviewAction = ({filmId, rating, comment}: ReviewData, errorHandler: (error: string) => void): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post(`${APIRoute.Comments}/${filmId}`, {rating, comment})
      .then(({status, data}) => {
        if (status >= 400 ) {
          errorHandler('Error sending review. Try again later.');
        }
        dispatch(loadComments(data));
        dispatch(redirectToRoute(`${AppRoute.Film}${String(filmId)}`));
      })
      .catch(() => {
        errorHandler('Error sending review. Try again later.');
      });
  };

export const favoriteAction = (favorite: FavoriteFilm): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post(`${APIRoute.Favorite}/${favorite.filmId}/${favorite.status === true ? 1 : 0}`)
      .then(({status, data}) => {
        if (status && status !== HttpCode.Unauthorized) {
          const adaptedData = adaptToClientFilm(data);
          if (adaptedData.id === store.getState().DATA.promoFilm.id) {
            dispatch(loadPromoFilm(adaptedData));
            return;
          }
          dispatch(loadFilm(adaptedData));
          return;
        }
        dispatch(redirectToRoute(AppRoute.Login));
      });
  };
