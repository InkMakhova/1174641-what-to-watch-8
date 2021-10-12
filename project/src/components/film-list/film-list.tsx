import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';

type FilmListProps = {
  filmsCount: number;
  films: Film[];
}

function FilmList({filmsCount, films} : FilmListProps) : JSX.Element {
  const cards = films.length <= filmsCount ? films : films.slice(0, filmsCount-1);

  const [activeFilmId, setActiveFilmId] = useState('');

  function handleCardMouseMove(filmId : string) {
    setActiveFilmId(filmId);
  }

  return (
    <div className="catalog__films-list"  defaultValue={activeFilmId}>
      {cards.map((card, id) => {
        const keyValue = `${card.id}`;
        return (
          <FilmCard
            key = {keyValue}
            filmId={keyValue}
            name = {card.name}
            previewImage = {card.previewImage}
            mouseMoveHandler={handleCardMouseMove}
          />
        );
      })}
    </div>
  );
}

export default FilmList;
