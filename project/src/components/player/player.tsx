import {useHistory, useParams} from 'react-router-dom';
import {
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import {store} from '../../index';
import {fetchFilmInfoAction} from '../../store/api-actions';
import {useSelector} from 'react-redux';
import {getCurrentFilm} from '../../store/films-data/selectors';
import format from 'format-duration';

type FilmParam = {
  id: string;
}

function Player() : JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeProgress, setTimeProgress] = useState('');

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const {id} = useParams<FilmParam>();

  const history = useHistory();

  const currentFilm = useSelector(getCurrentFilm);
  const videoLink = currentFilm.videoLink;

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => {
        setIsLoading(false);
        if (videoRef.current) {
          setTimeProgress(format(videoRef.current.duration*1000));
        }
      };
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [id]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    store.dispatch(fetchFilmInfoAction(Number(id)));
  }, [id]);

  const handleTimeUpdate = (event: SyntheticEvent<HTMLVideoElement, Event>): void => {
    if (!videoRef.current) {
      return;
    }

    if (isNaN(videoRef.current?.duration)) {
      return;
    }
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    setTimeProgress(format((videoRef.current.duration - videoRef.current.currentTime) * 1000));
  };

  return (
    <div className="player">
      <video
        src={videoLink}
        ref={videoRef}
        className="player__video"
        poster="img/player-poster.jpg"
        onTimeUpdate={handleTimeUpdate}
      />

      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress}
              max="100"
            />
            <div
              className="player__toggler"
              style={{left: `${progress}%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">-{timeProgress}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ?
            <button
              type="button"
              className="player__play"
              onClick={() => {
                setIsPlaying(false);
              }}
              disabled={isLoading}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button> :
            <button
              type="button"
              className="player__play"
              onClick={() => {
                setIsPlaying(true);
              }}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>}
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => {videoRef.current?.requestFullscreen();}}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
