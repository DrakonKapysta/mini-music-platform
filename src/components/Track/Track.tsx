import cl from "./Track.module.css";
import { FC } from "react";
import { IMusic } from "../../types/musicTypes";

interface ITrackProps extends IMusic {
  handleMusicClick: (music: string) => void;
}

const Track: FC<ITrackProps> = ({
  poster,
  author,
  handleMusicClick,
  audio,
}) => {
  return (
    <div className={cl.track}>
      <button
        className={cl.track__poster}
        onClick={() => handleMusicClick(audio)}
      >
        <img
          className={cl.track__posterPlay}
          src={`http://localhost:5000/image/${poster}`}
          alt="Poster"
        />
      </button>
      <div className={cl.track__about}>
        <p className={cl.track__author}>{author}</p>
        <p className={cl.track__duration}>4.21</p>
      </div>
    </div>
  );
};

export default Track;
