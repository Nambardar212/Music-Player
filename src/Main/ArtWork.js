import React from "react";
import shadow from "../Utils/Shadow";
import colors from "../Utils/Colors";

const ArtWork = ({uiState, songState}) => {
    
    const currentPalette = songState.currentSong[0].palette;

    return (
        <div className="artwork" style={{boxShadow: `${shadow(0,0,25,0,colors[`${currentPalette}`])}`}} >
            <img src={`${songState.currentSong[0].coverUrl}`} alt="Album Art" className={`artwork_img`} 
            style={{animation: "spinning 7s infinite linear",
            animationPlayState: uiState.songPlaying ? "running" : "paused" }} />
        </div>
    )
}


export default ArtWork;