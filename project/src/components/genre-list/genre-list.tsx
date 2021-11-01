import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {ACTIVE_GENRE_CLASS_NAME, ALL_GENRES, AppRoute} from '../../const';
import {State} from '../../types/state';
import {changeGenre, resetFilmNumberLimit} from '../../store/action';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {MouseEvent} from 'react';

type GenreListProps = {
  films: Film[];
}

const mapStateToProps = ({currentGenre}: State) => ({
  currentGenre: currentGenre,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeGenre(genre: string) {
    dispatch(changeGenre(genre));
    dispatch(resetFilmNumberLimit());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenreListProps;

function GenreList(props: ConnectedComponentProps): JSX.Element {
  const {films, currentGenre, onChangeGenre} = props;

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
export default connector(GenreList);
