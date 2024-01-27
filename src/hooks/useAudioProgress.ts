import { useEffect, useRef } from "react";

const useAudio = (audio: HTMLMediaElement) => {
  const progressPointRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const canPlayHandler = () => {
      if (progressPointRef.current && progressBarRef.current) {
        progressPointRef.current!.style.left = "0px";
        (
          progressBarRef.current.firstChild as HTMLSpanElement
        ).style.background = "#000";
      }
    };
    const timeUpdateHandler = () => {
      if (progressPointRef.current && progressBarRef.current) {
        const currentTimePercentage =
          (audio.currentTime / audio.duration) * 100;
        const progressBarWidth =
          progressBarRef.current.clientWidth +
          progressPointRef.current.clientWidth / 2;

        const newPosition = (progressBarWidth * currentTimePercentage) / 100;
        progressPointRef.current.style.left = `${newPosition}px`;
        const currentProgressBarPercentage =
          (newPosition / progressBarWidth) * 100;
        (
          progressBarRef.current.firstChild as HTMLSpanElement
        ).style.background = `linear-gradient(90deg, rgba(194,54,22,1) ${currentProgressBarPercentage}%, rgba(0,0,0,1) ${currentProgressBarPercentage}%)`;
      }
    };

    const pauseHandler = () => {
      if (audio.currentTime === audio.duration) {
        progressPointRef.current!.style.left = "0px";
      }
    };
    audio.addEventListener("pause", pauseHandler);
    audio.addEventListener("timeupdate", timeUpdateHandler);
    audio.addEventListener("canplay", canPlayHandler);
    return () => {
      audio.removeEventListener("pause", pauseHandler);
      audio.removeEventListener("timeupdate", timeUpdateHandler);
      audio.removeEventListener("canplay", canPlayHandler);
    };
  }, [audio]);
  return { progressPointRef, progressBarRef };
};

export default useAudio;
