import React, {useRef, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import {AppRoute} from '../../const';

type FilmCardProps = {
  film: Film;
}

function FilmCard({film}: FilmCardProps) : JSX.Element {
  const activeRef = useRef<boolean>(false);
  const [isPreviewVideo, setIsPreviewVideo] = useState(false);

  const history = useHistory();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        activeRef.current = true;

        setTimeout(() => {
          if (activeRef.current) {
            setIsPreviewVideo(true);
          }
        }, 1000);
      }}
      onMouseLeave={() => {
        activeRef.current = false;
        setIsPreviewVideo(false);
      }}
    >
      <div
        className="small-film-card__image"
        onClick={() => history.push(`${AppRoute.Film}${film.id}`)}
        style={{cursor: 'pointer'}}
      >
        {isPreviewVideo ?
          <VideoPlayer
            link={film.previewVideoLink}
            poster={film.posterImage}
            autoplay
            muted
          /> : <img src={film.previewImage} alt={film.name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
