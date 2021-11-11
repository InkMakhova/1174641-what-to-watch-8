export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  AddReview = '/review',
  Film = '/films/',
  Player = '/player/',
  Page404 = '/page-not-found',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  PromoFilm = '/promo',
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments',
}

export const initialFilm = {
  id: 0,
  name:	'',
  posterImage:	'',
  previewImage:	'',
  backgroundImage:	'',
  backgroundColor:	'',
  description: '',
  rating:	0,
  scoresCount:	0,
  director:	'',
  starring: [],
  runTime:	0,
  genre:	'',
  released:	0,
  isFavorite:	false,
  videoLink:	'',
  previewVideoLink:	'',
};

export const initialUser = {
  id: 0,
  email: '',
  name: '',
  avatarUrl: '',
  token: '',
};

export const ALL_GENRES = 'All genres';

export const ACTIVE_GENRE_CLASS_NAME = 'catalog__genres-item--active';

export const FILMS_NUMBER_STEP = 8;

export const SIMILAR_FILM_NUMBER = 4;

export enum TabType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const ACTIVE_TAB_CLASS_NAME = 'film-nav__item--active';

export enum RatingLevel {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
