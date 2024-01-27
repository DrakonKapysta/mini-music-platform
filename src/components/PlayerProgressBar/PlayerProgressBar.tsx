import { FC, memo } from "react";
import cl from "./PlayerProgressBar.module.css";
import useAudio from "../../hooks/useAudioProgress";

interface PlayerProgressBarProps {
  audio: HTMLAudioElement;
}

const PlayerProgressBar: FC<PlayerProgressBarProps> = memo(({ audio }) => {
  const { progressPointRef, progressBarRef } = useAudio(audio);

  return (
    <div className={cl.container} ref={progressBarRef}>
      <span className={cl.progressLine}></span>
      <div className={cl.progressPoint} ref={progressPointRef}></div>
    </div>
  );
});

export default PlayerProgressBar;
