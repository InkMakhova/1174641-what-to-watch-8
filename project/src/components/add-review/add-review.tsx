import {Link, useParams} from 'react-router-dom';
import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';
import UserBlock from '../user-block/user-block';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {store} from '../../index';
import {ThunkAppDispatch} from '../../types/action';
import {fetchFilmInfoAction} from '../../store/api-actions';
import {getCurrentFilm} from '../../store/films-data/selectors';

type FilmParam = {
  id: string;
}

function AddReview() : JSX.Element {
  const currentFilm = useSelector(getCurrentFilm);

  const {id} = useParams<FilmParam>();

  const titlePoster = `${currentFilm.name} poster`;
  const filmPage = `/films/${id}`;

  useEffect(() => {
    (store.dispatch as ThunkAppDispatch)(fetchFilmInfoAction(Number(id)));
  }, [id]);

  return (
    <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={filmPage} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={titlePoster} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}

export default AddReview;
