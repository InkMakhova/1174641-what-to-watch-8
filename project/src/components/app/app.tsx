import {useSelector} from 'react-redux';
import {Route, Router as BrowserRouter, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {getDataLoadedStatus} from '../../store/user-process/selectors';
import LoginRoute from '../login-route/login-route';

function App(): JSX.Element {
  const isDataLoaded = useSelector(getDataLoadedStatus);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <WelcomeScreen />
        </Route>
        <Route exact path='/review'>
          <AddReview />
        </Route>
        <LoginRoute
          exact
          path={AppRoute.Login}
          render={({history}) => <SignIn />}
        >
        </LoginRoute>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={({history}) => <MyList />}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={`${AppRoute.Film}:id${AppRoute.AddReview}`}
          render={() => <AddReview />}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Film}:id`}>
          <MoviePage />
        </Route>
        <Route exact path={`${AppRoute.Player}:id`}>
          <Player />
        </Route>
        <Route >
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

