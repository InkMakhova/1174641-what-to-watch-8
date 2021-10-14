import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
//import {reviews} from './mocks/reviews';

const Settings = {
  FILMS_COUNT: 20,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      film={films[5]}
      films={films}
      filmsCount={Settings.FILMS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
