import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {loadFilm} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';

type FilmListProps = {
  filmsCount: number;
}

const mapStateToProps = ({films, currentFilm}: State) => ({
  films,
  currentFilm,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onChangeFilm(film: Film) {
    dispatch(loadFilm(film));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & FilmListProps;

function FilmList(props: ConnectedComponentProps) : JSX.Element {
  const {filmsCount, films, currentFilm, onChangeFilm} = props;
  const cards = films.length <= filmsCount ? films : films.slice(0, filmsCount);

  return (
    <div className="catalog__films-list" defaultValue={currentFilm.id}>
      {cards.map((card) => {
        const keyValue = `${card.id}`;
        return (
          <FilmCard
            key = {keyValue}
            film={card}
            mouseEnterHandler={onChangeFilm}
          />
        );
      })}
    </div>
  );
}

export {FilmList};
export default connector(FilmList);
