import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {ACTIVE_GENRE_CLASS_NAME, ALL_GENRES, AppRoute} from '../../const';
import {State} from '../../types/state';
import {changeGenre, resetFilmNumberLimit} from '../../store/action';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import React, {MouseEvent} from 'react';
import {getCurrentGenre} from '../../store/catalog-process/selectors';
import {getFilms} from '../../store/films-data/selectors';

const mapStateToProps = (state: State) => ({
  currentGenre: getCurrentGenre(state),
  films: getFilms(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
    dispatch(resetFilmNumberLimit());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function GenreList(props: PropsFromRedux): JSX.Element {
  const {currentGenre, films, onChangeGenre} = props;

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
            onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
              onChangeGenre(evt.currentTarget.innerText);
            }}
          >
            {genre}
          </Link>
        </li>))}
    </ul>
  );
}

export {GenreList};
export default React.memo(connector(GenreList));
