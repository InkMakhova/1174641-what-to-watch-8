import {Link, useParams, useHistory} from 'react-router-dom';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';
import FilmList from '../film-list/film-list';
import {AppRoute, FilmListType, SIMILAR_FILM_NUMBER} from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import UserBlock from '../user-block/user-block';
import {fetchFilmInfoAction, fetchSimilarFilmsAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {store} from '../../index';
import {useEffect} from 'react';

type FilmParam = {
  id: string;
}

const mapStateToProps = ({currentFilm}: State) => ({currentFilm});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function MoviePage(props: PropsFromRedux) : JSX.Element {
  const {currentFilm} = props;

  const {id} = useParams<FilmParam>();
  useEffect(() => {
    (store.dispatch as ThunkAppDispatch)(fetchFilmInfoAction(Number(id)));
    (store.dispatch as ThunkAppDispatch)(fetchSimilarFilmsAction(Number(id)));
  }, [id]);
  const history = useHistory();

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

            <UserBlock />
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
            listType={FilmListType.SimilarList}
            filmsCount={SIMILAR_FILM_NUMBER}
          />
        </section>

        <Footer />
      </div>
    </>
  );
}

export {MoviePage};
export default connector(MoviePage);
