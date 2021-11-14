import {useParams} from 'react-router-dom';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';
import FilmList from '../film-list/film-list';
import {AuthorizationStatus, SIMILAR_FILM_NUMBER, TabType} from '../../const';
import {useSelector} from 'react-redux';
import UserBlock from '../user-block/user-block';
import {fetchCommentsAction, fetchFilmInfoAction, fetchSimilarFilmsAction} from '../../store/api-actions';
import {store} from '../../index';
import React, {useEffect} from 'react';
import AddReviewButton from '../add-review-button/add-review-button';
import {getComments, getCurrentFilm, getSimilarFilms} from '../../store/films-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import PlayerButton from '../player-button/player-button';
import MyListButton from '../my-list-button/my-list-button';

type FilmParam = {
  id: string;
}

function MoviePage() : JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);
  const comments = useSelector(getComments);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const similarFilms = useSelector(getSimilarFilms);

  const [activeTab, setActiveTab] = React.useState(TabType.Overview);

  const handleTabClick = React.useCallback(
    (tab): void => setActiveTab(tab),
    [],
  );

  const {id} = useParams<FilmParam>();

  useEffect(() => {
    store.dispatch(fetchFilmInfoAction(Number(id)));
    store.dispatch(fetchSimilarFilmsAction(Number(id)));
    store.dispatch(fetchCommentsAction(Number(id)));
    setActiveTab(TabType.Overview);
  }, [id]);

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

                <PlayerButton
                  id={String(currentFilm.id)}
                />

                <MyListButton film={currentFilm}/>

                {
                  authorizationStatus === AuthorizationStatus.Auth ?
                    <AddReviewButton /> : ''
                }

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
              tab={activeTab}
              film={currentFilm}
              comments={comments}
              onClick={handleTabClick}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList
            filmsCount={SIMILAR_FILM_NUMBER}
            films={similarFilms}
          />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
