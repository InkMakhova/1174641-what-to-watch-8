import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Film} from '../../types/film';
import {FilmReview} from '../../types/film-review';

export const getFilms = (state: State): Film[] => state[NameSpace.data].films;
export const getPromoFilm = (state: State): Film => state[NameSpace.data].promoFilm;
export const getCurrentFilm = (state: State): Film => state[NameSpace.data].currentFilm;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.data].similarFilms;
export const getComments = (state: State): FilmReview[] => state[NameSpace.data].comments;
