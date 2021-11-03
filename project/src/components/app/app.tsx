import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import ReviewForm from '../review-form/review-form';
import {State} from '../../types/state';

const mapStateToProps = ({promoFilm, films, authorizationStatus, isDataLoaded}: State) => ({
  promoFilm,
  films,
  //authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props : PropsFromRedux): JSX.Element {
  const {promoFilm, films, /*authorizationStatus, */isDataLoaded} = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <WelcomeScreen />
        </Route>
        <Route exact path='/review'>
          <ReviewForm />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList myFilms={films}/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={`${AppRoute.Film}:id${AppRoute.AddReview}`}
          render={() => (
            <AddReview
              film={promoFilm}
            />)}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Film}:id`}>
          <MoviePage
            similarFilms={films}
          />
        </Route>
        <Route exact path={`${AppRoute.Player}:id`}>
          <Player
            film={promoFilm}
          />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);

