import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {Film} from '../../types/film';
import ReviewForm from '../review-form/review-form';

type AddReviewProps = {
  film: Film;
}

function AddReview({film} : AddReviewProps) : JSX.Element {
  const {id, name, posterImage} = film;
  const titlePoster = `${name} poster`;
  const imagePoster = `${posterImage}-poster`;
  const filmPage = `/films/${id}`;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={posterImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={filmPage} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={imagePoster} alt={titlePoster} width="218" height="327"/>
        </div>
      </div>

      <ReviewForm />

    </section>
  );
}

export default AddReview;
