import {Link, useParams, useHistory} from 'react-router-dom';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';
import FilmList from '../film-list/film-list';
import {Film} from '../../types/film';
//import films from '../../mocks/films';
import {AppRoute} from '../../const';

type MoviePageProps = {
  similarFilms: Film[];
}

type FilmParam = {
  id: string;
}

function MoviePage({similarFilms}: MoviePageProps) : JSX.Element {
  const {id} = useParams<FilmParam>();
  const history = useHistory();

  const currentFilm = films.find((film: Film) => film.id === id);
  if (!currentFilm) {
    throw '404';
  }

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div
                  className="user-block__avatar"
                  onClick={() => history.push(AppRoute.MyList)}
                >
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(`${AppRoute.Player}${id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link
                  className="btn film-card__button"
                  to={`${AppRoute.Film}${id}${AppRoute.AddReview}`}
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218"
                height="327"
              />
            </div>
            <Tabs
              film={currentFilm}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList
            filmsCount={4}
            films={similarFilms}
          />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
