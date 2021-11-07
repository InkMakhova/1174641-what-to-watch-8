import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';
import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {loadFilm} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {FilmListType} from '../../const';

type FilmListProps = {
  filmsCount: number;
  listType: string;
}

const mapStateToProps = ({films, similarFilms, currentFilm}: State) => ({
  films,
  similarFilms,
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
  const {
    filmsCount,
    listType,
    films,
    similarFilms,
    currentFilm,
    onChangeFilm} = props;

  function getCards(type: string) {
    switch (type) {
      case FilmListType.MainList:
        return films;
      case FilmListType.SimilarList:
        return similarFilms;
    }
  }

  const filmCards = getCards(listType);

  if (filmCards && filmCards.length > 0) {
    const cards = filmCards.length <= filmsCount ? filmCards : filmCards.slice(0, filmsCount);
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
  return (
    <div className="catalog__films-list" defaultValue={currentFilm.id}>
      <p>Data is not found</p>
    </div>
  );
}

export {FilmList};
export default connector(FilmList);
