import React from 'react';
import {Film} from '../../types/film';
import {
  ACTIVE_TAB_CLASS_NAME,
  RatingLevel,
  RatingLevelGrades,
  TabType} from '../../const';
import {formatDate, humanizeDate} from '../../util';
import Review from '../review/review';
import {FilmReview} from '../../types/film-review';

type TabsProps = {
  film: Film;
  comments: FilmReview[];
  tab: string;
  onClick: (tab: string) => void;
}

function Tabs(props: TabsProps): JSX.Element {
  const {film, comments, tab, onClick} = props;
  const {
    genre,
    released,
    rating,
    scoresCount,
    description,
    director,
    starring,
    runTime} = film;

  function getRatingLevel(filmRating: number) {
    switch (true) {
      case filmRating >= RatingLevelGrades.Bad && filmRating < RatingLevelGrades.Normal:
        return RatingLevel.Bad;
      case filmRating >= RatingLevelGrades.Normal && filmRating < RatingLevelGrades.Good:
        return RatingLevel.Normal;
      case filmRating >= RatingLevelGrades.Good && filmRating < RatingLevelGrades.VeryGood:
        return RatingLevel.Good;
      case filmRating >= RatingLevelGrades.VeryGood && filmRating < RatingLevelGrades.Awesome:
        return RatingLevel.VeryGood;
      case filmRating === RatingLevelGrades.Awesome:
        return RatingLevel.Awesome;
    }
  }

  function humanizeRunTime(filmDuration: number): string {
    const hours = Math.trunc(filmDuration/60) > 0 ? Math.trunc(filmDuration/60) : '';
    const minutes = filmDuration%60;

    return `${hours}h ${minutes}m`;
  }

  function getActiveTabContent(tabName: string) {
    switch (tabName) {
      case TabType.Overview:
        return (
          <>
            <div className="film-rating">
              <div className="film-rating__score">{rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{getRatingLevel(rating)}</span>
                <span className="film-rating__count">{`${scoresCount} ratings`}</span>
              </p>
            </div>

            <div className="film-card__text">
              <p>{description}</p>

              <p className="film-card__director"><strong>Director: {director}</strong></p>

              <p className="film-card__starring">
                <strong>Starring: {starring.join(', ')} and other
                </strong>
              </p>
            </div>
          </>
        );
      case TabType.Details:
        return (
          <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Director</strong>
                <span className="film-card__details-value">{director}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Starring</strong>
                <span className="film-card__details-value" style={{whiteSpace: 'pre-line'}}>
                  {starring.join(', \n')}
                </span>
              </p>
            </div>

            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Run Time</strong>
                <span className="film-card__details-value">{humanizeRunTime(runTime)}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Genre</strong>
                <span className="film-card__details-value">{genre}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Released</strong>
                <span className="film-card__details-value">{released}</span>
              </p>
            </div>
          </div>
        );
      case TabType.Reviews:
        return (
          <div className="film-card__reviews film-card__row">
            <div className="film-card__reviews-col">
              {comments !== null ? comments.map((review) => (
                <Review
                  key = {review.id}
                  film={film}
                  author={review.user.name}
                  dateTime={formatDate(review.date)}
                  dateText={humanizeDate(review.date)}
                  rating={review.rating}
                  quote={review.comment}
                />),
              ) : ''}
            </div>
          </div>
        );
    }
  }

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={`film-nav__item ${tab === TabType.Overview ? ACTIVE_TAB_CLASS_NAME : ''}`}
            key={TabType.Overview}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="film-nav__link"
              onClick={() => onClick(TabType.Overview)}
            >
              Overview
            </a>
          </li>
          <li
            className={`film-nav__item ${tab === TabType.Details ? ACTIVE_TAB_CLASS_NAME : ''}`}
            key={TabType.Details}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="film-nav__link"
              onClick={() => onClick(TabType.Details)}
            >
              Details
            </a>
          </li>
          <li
            className={`film-nav__item ${tab === TabType.Reviews ? ACTIVE_TAB_CLASS_NAME : ''}`}
            key={TabType.Reviews}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="film-nav__link"
              onClick={() => onClick(TabType.Reviews)}
            >
              Reviews
            </a>
          </li>
        </ul>
      </nav>

      {getActiveTabContent(tab)}
    </div>
  );
}

export default React.memo(Tabs);
