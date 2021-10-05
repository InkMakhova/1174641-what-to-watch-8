import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
// import FilmCard from '../film-card/film-card';
// import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Page404 from '../page-404/page-404';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <WelcomeScreen
            title = {title}
            genre = {genre}
            year = {year}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyList />
        </Route>
        {/*<Route exact path={AppRoute.FilmCard}>*/}
        {/*  <FilmCard />*/}
        {/*</Route>*/}
        {/*<Route exact path={AppRoute.AddReview}>*/}
        {/*  <AddReview />*/}
        {/*</Route>*/}
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

