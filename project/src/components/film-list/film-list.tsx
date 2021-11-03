import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';

type FilmListProps = {
  filmsCount: number;
  films: Film[];
}

function FilmList({filmsCount, films} : FilmListProps) : JSX.Element {
  const cards = films.length <= filmsCount ? films : films.slice(0, filmsCount);

  const [activeFilm, setActiveFilm] = useState({
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [''],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  });

  function handleCardMouseEnter(film : Film) {
    setActiveFilm(film);
  }

  return (
    <div className="catalog__films-list" defaultValue={activeFilm.id}>
      {cards.map((card, id) => {
        const keyValue = `${card.id}`;
        return (
          <FilmCard
            key = {keyValue}
            film={card}
            name = {card.name}
            previewImage = {card.previewImage}
            mouseEnterHandler={handleCardMouseEnter}
          />
        );
      })}
    </div>
  );
}

export default FilmList;
