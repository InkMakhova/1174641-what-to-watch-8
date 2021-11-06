import {Film, FilmFromServer} from '../types/film';
import {User, UserFromServer} from '../types/user';

export function adaptToClientFilm(film: FilmFromServer) {
  const adaptedFilm = Object.assign(
    {},
    film,
    {
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      backgroundImage: film.background_image,
      backgroundColor: film.background_color,
      videoLink: film.video_link,
      previewVideoLink: film.preview_video_link,
      scoresCount: film.scores_count,
      runTime: film.run_time,
      isFavorite: film.is_favorite,
    },
  );

  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.background_image;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.is_favorite;

  return <Film>adaptedFilm;
}

export function adaptToClientUser(user: UserFromServer) {
  const adaptedUser = Object.assign(
    {},
    user,
    {
      avatarUrl: user.avatar_url,
    },
  );

  delete adaptedUser.avatar_url;

  return <User>adaptedUser;
}
