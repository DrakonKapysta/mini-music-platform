import cl from "./MusicList.module.css";
import Track from "../Track/Track";
import { FC } from "react";
import { IMusic } from "../../types/musicTypes";

type MusicListProps = {
  musicList: IMusic[];
  handleMusicClick: (music: string) => void;
};

const MusicList: FC<MusicListProps> = ({ musicList, handleMusicClick }) => {
  return (
    <div className={cl.musicList}>
      {musicList.map((music) => (
        <Track
          handleMusicClick={handleMusicClick}
          key={music._id}
          poster={music.poster}
          author={music.author}
          audio={music.audio}
        />
      ))}
    </div>
  );
};

export default MusicList;
