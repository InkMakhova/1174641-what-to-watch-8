import {AppRoute} from '../../const';
import {Link, useParams} from 'react-router-dom';
import React from 'react';

type FilmParam = {
  id: string;
}

function AddReviewButton(): JSX.Element {
  const {id} = useParams<FilmParam>();

  return (
    <Link
      className="btn film-card__button"
      to={`${AppRoute.Film}${id}${AppRoute.AddReview}`}
    >
      Add review
    </Link>
  );
}

export default React.memo(AddReviewButton);
