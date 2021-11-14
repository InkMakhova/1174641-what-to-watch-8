import React from 'react';
import {useDispatch} from 'react-redux';
import {favoriteAction} from '../../store/api-actions';
import {Film} from '../../types/film';

type MyListButtonProps = {
  film: Film;
}

function MyListButton({film}: MyListButtonProps): JSX.Element {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(favoriteAction({filmId: film.id, status: !film.isFavorite}));
  };

  if (film.isFavorite) {
    return (
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick = {() => onClick()}
      >
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  }
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick = {() => onClick()}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default MyListButton;
