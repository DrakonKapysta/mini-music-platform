import cl from "./MusicPage.module.css";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import MusicList from "../../components/MusicList/MusicList";
import { FC, useState } from "react";
import { IMusic } from "../../types/musicTypes";
import useMusicQuery from "../../hooks/useMusicQuery";

const MusicPage: FC = () => {
  const [currentMusic, setCurrentMusic] = useState<string | null>(null);
  const { isLoading, data, isSuccess } = useMusicQuery();

  const handleMusicClick = (music: string) => {
    setCurrentMusic(music);
  };

  return (
    <div className={cl.wrapper}>
      {isLoading ? (
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Loading...</h2>
        </div>
      ) : (
        isSuccess && (
          <MusicList
            handleMusicClick={handleMusicClick}
            musicList={data as IMusic[]}
          />
        )
      )}
      <MusicPlayer currentMusic={currentMusic} />
    </div>
  );
};

export default MusicPage;
