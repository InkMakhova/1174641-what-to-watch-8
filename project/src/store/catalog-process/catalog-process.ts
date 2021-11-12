import {CatalogProcess} from '../../types/state';
import {ALL_GENRES, FILMS_NUMBER_STEP} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeFilmNumberLimit,
  changeGenre,
  changeLimitCounter,
  resetFilmNumberLimit} from '../action';

const initialState: CatalogProcess = {
  currentGenre: ALL_GENRES,
  limitCounter: 1,
  filmNumberLimit: FILMS_NUMBER_STEP,
};

const catalogProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const currentGenre = action.payload;
      state.currentGenre = currentGenre;
    })
    .addCase(changeLimitCounter, (state, action) => {
      state.limitCounter = state.limitCounter + 1;
    })
    .addCase(changeFilmNumberLimit, (state, action) => {
      state.filmNumberLimit = state.filmNumberLimit * state.limitCounter;
    })
    .addCase(resetFilmNumberLimit, (state, action) => {
      state.limitCounter = initialState.limitCounter;
      state.filmNumberLimit = initialState.filmNumberLimit;
    });
});

export {catalogProcess};
