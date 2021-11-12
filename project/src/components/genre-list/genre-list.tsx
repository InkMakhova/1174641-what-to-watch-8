import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {ACTIVE_GENRE_CLASS_NAME, ALL_GENRES, AppRoute} from '../../const';
import {changeGenre, resetFilmNumberLimit} from '../../store/action';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {getCurrentGenre} from '../../store/catalog-process/selectors';
import {getFilms} from '../../store/films-data/selectors';

function GenreList(): JSX.Element {
  const currentGenre = useSelector(getCurrentGenre);
  const films = useSelector(getFilms);

  const dispatch = useDispatch();

  const onChangeGenre = (genre: string) => {
    dispatch(changeGenre(genre));
    dispatch(resetFilmNumberLimit());
  };

  const nonUniqueGenreList = films.map((film: Film) => film.genre);
  const uniqueGenreList = new Set(nonUniqueGenreList);
  const fullGenreList = [ALL_GENRES, ...uniqueGenreList];

  return (
    <ul className='catalog__genres-list'>
      {fullGenreList.map((genre: string) => (
        <li
          className={`catalog__genres-item ${genre === currentGenre ? ACTIVE_GENRE_CLASS_NAME : ''}`}
          key={genre}
        >
          <Link to={AppRoute.Root}
            className='catalog__genres-link'
            onClick={(evt) => {
              onChangeGenre(evt.currentTarget.innerText);
            }}
          >
            {genre}
          </Link>
        </li>))}
    </ul>
  );
}

export default GenreList;
