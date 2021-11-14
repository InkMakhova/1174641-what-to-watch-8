import {FilmsData} from '../../types/state';
import {initialFilm} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  loadComments,
  loadFilm,
  loadFilms,
  loadPromoFilm,
  loadSimilarFilms,
  resetFavoriteFilms
} from '../action';

const initialState: FilmsData = {
  films: [],
  promoFilm: initialFilm,
  currentFilm: initialFilm,
  similarFilms: [],
  comments: [],
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      const films = action.payload;
      state.films = films;
    })
    .addCase(loadPromoFilm, (state, action) => {
      const promoFilm = action.payload;
      state.promoFilm = promoFilm;
    })
    .addCase(loadFilm, (state, action) => {
      const currentFilm = action.payload;
      state.currentFilm = currentFilm;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      const similarFilms = action.payload;
      state.similarFilms = similarFilms;
    })
    .addCase(loadComments, (state, action) => {
      const comments = action.payload;
      state.comments = comments;
    })
    .addCase(resetFavoriteFilms, (state, action) => {
      state.promoFilm.isFavorite = false;
      state.currentFilm.isFavorite = false;
    });
});

export {filmsData};
