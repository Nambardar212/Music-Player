import React from "react";
import PlayerDuration from "./PlayerDuration";
import PlayerSeekBar from "./PlayerSeekBar";


const SeekControl = ({uiState, setUiState, audioRef, songState, setSongState}) => {
   
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + 
            ":" +
            ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    return (
        <div className="player_seek-controls">
            <PlayerDuration value={`${getTime(songState.elapsed)}`} />
            <PlayerSeekBar 
                songState={songState}
                setSongState={setSongState}
                audioRef={audioRef}
                seekWidth={uiState.seekWidth}
            />
            <PlayerDuration 
                value={`${
                    getTime(songState.duration) === "NaN:aN" ?
                    "0:00" :
                    getTime(songState.duration)
                }`}
            />
        </div>
    )
}


export default SeekControl;