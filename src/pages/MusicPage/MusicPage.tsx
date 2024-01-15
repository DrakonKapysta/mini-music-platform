import cl from "./MusicPage.module.css";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import MusicList from "../../components/MusicList/MusicList";
import { FC, useState } from "react";
import { IMusic } from "../../types/musicTypes";
import useMusic from "../../hooks/useMusicQuery";

const MusicPage: FC = () => {
  const [music, setMusic] = useState<IMusic[]>([]);
  const { isLoading, data, isSuccess } = useMusic();

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
        isSuccess && <MusicList musicList={data as IMusic[]} />
      )}
      <MusicPlayer />
    </div>
  );
};

export default MusicPage;
