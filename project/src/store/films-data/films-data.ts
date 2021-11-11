import {ActionType, Actions} from '../../types/action';
import {FilmsData} from '../../types/state';
import {initialFilm} from '../../const';

const initialState: FilmsData = {
  films: [],
  promoFilm: initialFilm,
  currentFilm: initialFilm,
  similarFilms: [],
  comments: [],
};

const filmsData = (state = initialState, action: Actions): FilmsData => {
  switch (action.type) {
    case ActionType.LoadFilms: {
      const films = action.payload;
      return {
        ...state,
        films,
      };
    }
    case ActionType.LoadPromoFilm: {
      const promoFilm = action.payload;
      return {
        ...state,
        promoFilm,
      };
    }
    case ActionType.LoadFilm: {
      const currentFilm = action.payload;
      return {
        ...state,
        currentFilm,
      };
    }
    case ActionType.LoadSimilarFilms: {
      const similarFilms = action.payload;
      return {
        ...state,
        similarFilms,
      };
    }
    case ActionType.LoadComments: {
      const comments = action.payload;
      return {
        ...state,
        comments,
      };
    }
    default:
      return state;
  }
};

export {filmsData};
