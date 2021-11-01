import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
//import films from './mocks/films';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {createAPI} from './services/api';

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
