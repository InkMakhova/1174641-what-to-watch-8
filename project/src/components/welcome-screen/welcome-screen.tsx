import {useHistory} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import GenreList from '../genre-list/genre-list';
import FilmList from '../film-list/film-list';
import ShowMore from '../show-more/show-more';
import Footer from '../footer/footer';
import {Film} from '../../types/film';
import {ALL_GENRES, AppRoute, FilmListType} from '../../const';
import {State} from '../../types/state';

const mapStateToProps = ({currentGenre, promoFilm, films, filmNumberLimit, authorizationStatus}: State) => ({
  currentGenre: currentGenre,
  promoFilm,
  films,
  filmNumberLimit,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function getFilmsByGenre(genre: string, films: Film[]) {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
}

function WelcomeScreen(props: PropsFromRedux): JSX.Element {
  const {promoFilm, currentGenre, films, filmNumberLimit} = props;
  const {id, name, genre, released, posterImage, backgroundImage} = promoFilm;

  const history = useHistory();

  const filmsByGenre = getFilmsByGenre(currentGenre, films);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList
            films={films}
          />

          <FilmList
            filmsCount={filmsByGenre.length > filmNumberLimit ? filmNumberLimit : filmsByGenre.length}
            listType={FilmListType.MainList}
          />

          {filmsByGenre.length > filmNumberLimit ? <ShowMore /> : ''}

        </section>

        <Footer />
      </div>
    </>
  );
}

export {WelcomeScreen};
export default connector(WelcomeScreen);
