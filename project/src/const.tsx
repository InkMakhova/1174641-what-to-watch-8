export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  AddReview = '/review',
  Film = '/films/',
  Player = '/player/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export const ALL_GENRES = 'All genres';

export const ACTIVE_GENRE_CLASS_NAME = 'catalog__genres-item--active';

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
