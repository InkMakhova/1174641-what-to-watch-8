import {Actions, ActionType} from '../types/action';
import {State} from '../types/state';
import {AuthorizationStatus, FILMS_NUMBER_STEP} from '../const';

const promoFilmMock = {
  id: 1,
  name:	'No Country for Old Men',
  posterImage:	'https://8.react.pages.academy/static/film/poster/No_Country_for_Old_Men.jpg',
  previewImage:	'https://8.react.pages.academy/static/film/preview/no-country-for-old-men.jpg',
  backgroundImage:	'https://8.react.pages.academy/static/film/background/No_Country_for_Old_Men.jpg',
  backgroundColor:	'#BDAD8F',
  description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
  rating:	4.1,
  scoresCount:	764976,
  director:	'Ethan Coen',
  starring: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
  runTime:	122,
  genre:	'Crime',
  released:	2007,
  isFavorite:	false,
  videoLink:	'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
  previewVideoLink:	'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
};

const initialState = {
  currentGenre: 'All genres',
  promoFilm: promoFilmMock,
  films: [],
  limitCounter: 1,
  filmNumberLimit: FILMS_NUMBER_STEP,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
} as State;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadPromoFilm:
      return {...state, promoFilm: action.payload} as State;
    case ActionType.LoadFilms:
      return {...state, films: action.payload} as State;
    case ActionType.ChangeGenre:
      return {...state, currentGenre: action.payload} as State;
    case ActionType.ChangeLimitCounter:
      return {...state, limitCounter: state.limitCounter + 1} as State;
    case ActionType.ChangeFilmNumberLimit:
      return {...state, filmNumberLimit: state.filmNumberLimit * state.limitCounter} as State;
    case ActionType.ResetFilmNumberLimit:
      return {...state, limitCounter: initialState.limitCounter, filmNumberLimit: initialState.filmNumberLimit} as State;
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      } as State;
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth} as State;
    default:
      return state;
  }
};

export {reducer};
