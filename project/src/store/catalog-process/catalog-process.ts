import {Actions, ActionType} from '../../types/action';
import {CatalogProcess} from '../../types/state';
import {ALL_GENRES, FILMS_NUMBER_STEP} from '../../const';

const initialState: CatalogProcess = {
  currentGenre: ALL_GENRES,
  limitCounter: 1,
  filmNumberLimit: FILMS_NUMBER_STEP,
};

const catalogProcess = (state = initialState, action: Actions): CatalogProcess => {
  switch (action.type) {
    case ActionType.ChangeGenre: {
      const currentGenre = action.payload;
      return {
        ...state,
        currentGenre,
      };
    }
    case ActionType.ChangeLimitCounter: {
      const limitCounter = state.limitCounter + 1;
      return {
        ...state,
        limitCounter,
      };
    }
    case ActionType.ChangeFilmNumberLimit: {
      const filmNumberLimit = state.filmNumberLimit * state.limitCounter;
      return {
        ...state,
        filmNumberLimit,
      };
    }
    case ActionType.ResetFilmNumberLimit: {
      return {
        ...state,
        limitCounter: initialState.limitCounter,
        filmNumberLimit: initialState.filmNumberLimit,
      };
    }
    default:
      return state;
  }
};

export {catalogProcess};
