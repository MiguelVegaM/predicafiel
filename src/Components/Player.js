import React, { useEffect, useRef, useState } from "react";

import {
  IoPlay,
  IoPause,
  IoPlaySkipBack,
  IoPlaySkipForward,
} from "react-icons/io5";
import {
  ImVolumeHigh,
  ImVolumeMedium,
  ImVolumeLow,
  ImVolumeMute2,
} from "react-icons/im";
// import { tracks } from "../Route/AudioFiltro";

function Player({
  audioElem,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  recursoSeleccionado,
}) {
  const clickRef = useRef();

  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const checkWidth = (event) => {
    let width = clickRef.current.clientWidth;
    const offset = event.nativeEvent.offsetX;
    const divProgress = (offset / width) * 100;
    audioElem.current.currentTime = (divProgress / 100) * currentSong.length;

    // console.log(audioElem.current.currentTime);
  };
  // console.log(currentSong);

  // const skipBack = () => {
  //   const index = tracks.findIndex((x) => x.id === currentSong.id);
  //   console.log(index);
  //   if (index === 0) {
  //     setCurrentSong(tracks[tracks.length - 1]);
  //   } else {
  //     setCurrentSong(tracks[index - 1]);
  //   }

  //   audioElem.current.currentTime = 0;
  //   setIsPlaying((isPlaying = false));
  // };

  // const skipForward = () => {
  //   const index = tracks.findIndex((x) => x.id === currentSong.id);
  //   console.log(index);

  //   if (index === tracks.length - 1) {
  //     setCurrentSong(tracks[0]);
  //   } else {
  //     setCurrentSong(tracks[index + 1]);
  //   }

  //   audioElem.current.currentTime = 0;
  //   setIsPlaying((isPlaying = false));
  // };
  const [muteVolume, setMuteVolume] = useState(false);

  const [volume, setVolume] = useState(60);
  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100;
      audioElem.current.muted = muteVolume;
      // console.log(audioElem.current.volume);
    }
  }, [volume, audioElem, muteVolume]);

  return (
    <div className="player-container">
      <div className="media-buttons">
        <IoPlaySkipBack
          // onClick={skipBack}
          style={{ display: "none" }}
        />
        {isPlaying ? (
          <IoPause style={{ fontSize: "1.5rem" }} onClick={PlayPause} />
        ) : (
          <IoPlay style={{ fontSize: "1.5rem" }} onClick={PlayPause} />
        )}
        <IoPlaySkipForward
          // onClick={skipForward}
          style={{ display: "none" }}
        />
      </div>
      <div className="navigation-bar">
        <div className="navigation-wrapper" onClick={checkWidth} ref={clickRef}>
          <div
            className="seek-bar"
            style={{ width: `${currentSong.progress + "%"}` }}
          ></div>
        </div>
      </div>
      <div className="other-buttons">
        <div className="volume">
          <button
            onClick={() => {
              setMuteVolume(!muteVolume);
            }}
          >
            {muteVolume || volume < 5 ? (
              <ImVolumeMute2 />
            ) : volume < 30 ? (
              <ImVolumeLow />
            ) : volume < 70 ? (
              <ImVolumeMedium />
            ) : (
              <ImVolumeHigh />
            )}
          </button>
          <input
            id="volumeInput"
            className="volumeInput"
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value);
              setMuteVolume(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
