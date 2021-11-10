import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';

type FilmListProps = {
  films: Film[];
  filmsCount: number;
}

function FilmList({filmsCount, films}: FilmListProps) : JSX.Element {

  if (films && films.length > 0) {
    const cards = films.length <= filmsCount ? films : films.slice(0, filmsCount);
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

export default FilmList;

