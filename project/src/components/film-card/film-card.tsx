import React from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {AppRoute} from '../../const';

type FilmCardProps = {
  film: Film;
  name: string;
  previewImage: string;
  mouseEnterHandler: (film : Film) => void;
}

function FilmCard({film, name, previewImage, mouseEnterHandler} : FilmCardProps) : JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        mouseEnterHandler(film);
      }}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${film.id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
