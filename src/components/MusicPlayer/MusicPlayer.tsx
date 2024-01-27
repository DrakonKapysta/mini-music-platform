import cl from "./MusicPlayer.module.css";
import { FC, useEffect, useState } from "react";
import playIcon from "../../assets/icons/playIcon.svg";
import stopIcon from "../../assets/icons/pauseIcon.svg";
import PlayerProgressBar from "../PlayerProgressBar/PlayerProgressBar";
import { flushSync } from "react-dom";

interface IMusicPlayerProps {
  currentMusic: string | null;
}

const MusicPlayer: FC<IMusicPlayerProps> = ({ currentMusic }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [paused, setPaused] = useState<boolean>(true);

  const handlePlay = async () => {
    if (!audio || !audio.src) {
      return;
    }
    if (audio.paused) {
      await audio.play();
      setPaused(false);
    } else {
      audio.pause();
      setPaused(true);
    }
  };

  useEffect(() => {
    const newAudio = new Audio();
    if (currentMusic !== null) {
      newAudio.src = `http://localhost:5000/audio/${currentMusic}`;
      newAudio.addEventListener("ended", () => {
        setPaused(true);
      });
    }
    setAudio(newAudio);
    setPaused(true);
    return () => {
      newAudio.pause();
      newAudio.removeEventListener("ended", () => {
        setPaused(true);
      });
    };
  }, [currentMusic]);
  return (
    <div className={cl.player}>
      <button className={cl.player__playButton} onClick={handlePlay}>
        {paused ? (
          <img src={playIcon} alt="play" />
        ) : (
          <img src={stopIcon} alt="stop" />
        )}
      </button>
      {audio && <PlayerProgressBar audio={audio} />}
    </div>
  );
};

export default MusicPlayer;
