import React from "react";
import colors from "../Utils/Colors";
import gradients from "../Utils/Gradient";
import shadow from "../Utils/Shadow";

const PlayerSeekBar = ({songState, setSongState, audioRef, seekWidth}) => {

    const currentPalette = songState.currentSong[0].palette;

    const playerSeekHandler = (e) => {
        const value = e.target.value;
        audioRef.current.currentTime = value;
        setSongState({
            ...songState,
            elapsed: value,
        })
    }

    return (
        <div className="player_seek-bar-wrapper">
            <div className="player_seek-bar-gradient"
               style={{
                boxShadow: `${shadow(0,0,30,0,colors[`${currentPalette}`])}`,
                background: `${gradients[`${currentPalette}`]}`,
                width: `${(songState.elapsed / songState.duration) * 100}%`,
               }}
            ></div>
            <input 
                min={0}
                max={songState.duration || 0}
                value={songState.elapsed || 0}
                onChange={playerSeekHandler}
                type="range"
                className="player_seek-bar"
                defaultValue={0}
            />
        </div>
    )
}


export default PlayerSeekBar;