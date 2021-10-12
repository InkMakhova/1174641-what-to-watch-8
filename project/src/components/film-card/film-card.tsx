import React from 'react';

type FilmCardProps = {
  filmId: string;
  name: string;
  previewImage: string;
  mouseMoveHandler: (filmId : string) => void;
}

function FilmCard({filmId, name, previewImage, mouseMoveHandler} : FilmCardProps) : JSX.Element {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        mouseMoveHandler(filmId);
      }}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
