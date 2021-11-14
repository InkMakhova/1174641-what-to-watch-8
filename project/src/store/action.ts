import {ActionType} from '../types/action';
import {AppRoute, AuthorizationStatus} from '../const';
import {Film} from '../types/film';
import {User} from '../types/user';
import {FilmReview} from '../types/film-review';
import {createAction} from '@reduxjs/toolkit';

export const loadPromoFilm = createAction(
  ActionType.LoadPromoFilm,
  (film: Film) => ({
    payload: film,
  }),
);

export const loadFilms = createAction(
  ActionType.LoadFilms,
  (films: Film[]) => ({
    payload: films,
  }),
);

export const loadFilm = createAction(
  ActionType.LoadFilm,
  (film: Film) => ({
    payload: film,
  }),
);

export const loadSimilarFilms = createAction(
  ActionType.LoadSimilarFilms,
  (films: Film[]) => ({
    payload: films,
  }),
);

export const loadComments = createAction(
  ActionType.LoadComments,
  (comments: FilmReview[]) => ({
    payload: comments,
  }),
);

export const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre: string) => ({
    payload: genre,
  }),
);

export const changeLimitCounter = createAction(ActionType.ChangeLimitCounter);

export const changeFilmNumberLimit = createAction(ActionType.ChangeFilmNumberLimit);

export const resetFilmNumberLimit = createAction(ActionType.ResetFilmNumberLimit);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const changeUser = createAction(
  ActionType.ChangeUser,
  (user: User) => ({
    payload: user,
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => ({
    payload: url,
  }),
);

export const loadFavoriteFilms = createAction(
  ActionType.LoadFavoriteFilms,
  (favoriteFilms: Film[]) => ({
    payload: favoriteFilms,
  }),
);
