import FilmCard from '../film-card/film-card';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {FilmListType} from '../../const';

type FilmListProps = {
  filmsCount: number;
  listType: string;
}

const mapStateToProps = ({films, similarFilms}: State) => ({
  films,
  similarFilms,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & FilmListProps;

function FilmList(props: ConnectedComponentProps) : JSX.Element {
  const {
    filmsCount,
    listType,
    films,
    similarFilms} = props;

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
      <div className="catalog__films-list">
        {cards.map((card) => {
          const keyValue = `${card.id}`;
          return (
            <FilmCard
              key = {keyValue}
              film={card}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="catalog__films-list">
      <p>There is no data about films</p>
    </div>
  );
}

export {FilmList};
export default connector(FilmList);
