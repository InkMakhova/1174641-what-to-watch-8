import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title = {Settings.TITLE}
      genre = {Settings.GENRE}
      year = {Settings.YEAR}
    />
  </React.StrictMode>,
  document.getElementById('root'));
