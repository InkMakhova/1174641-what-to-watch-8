import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
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
import ReviewForm from '../review-form/review-form';
import {State} from '../../types/state';
import browserHistory from '../../browser-history';
import {getFilms, getPromoFilm} from '../../store/films-data/selectors';
import {getDataLoadedStatus} from '../../store/user-process/selectors';

const mapStateToProps = (state: State) => ({
  promoFilm: getPromoFilm(state),
  films: getFilms(state),
  isDataLoaded: getDataLoadedStatus(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props : PropsFromRedux): JSX.Element {
  const {promoFilm, films, isDataLoaded} = props;

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
          <ReviewForm />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={({history}) => <MyList myFilms={films}/>}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={`${AppRoute.Film}:id${AppRoute.AddReview}`}
          render={() => (
            <AddReview />)}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Film}:id`}>
          <MoviePage />
        </Route>
        <Route exact path={`${AppRoute.Player}:id`}>
          <Player
            film={promoFilm}
          />
        </Route>
        <Route exact path={AppRoute.Page404}>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);

