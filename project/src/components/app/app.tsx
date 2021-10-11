import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import {Film} from '../../types/film';

type AppScreenProps = {
  film: Film,
  films: Film[],
  filmsCount: number,
}

function App({film, films, filmsCount} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <WelcomeScreen
            name= {film.name}
            genre = {film.genre}
            released= {film.released}
            posterImage={film.posterImage}
            backgroundImage={film.backgroundImage}
            films={films}
            filmsCount={filmsCount}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => (<AddReview
            title={'The Grand Budapest Hotel'}
            image={'img/bg-the-grand-budapest-hotel.jpg'}
            page={''}    />)}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Film}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.Player}>
          <Player />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

