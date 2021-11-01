import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
//import films from './mocks/films';
import {reducer} from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        film={films[5]}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
