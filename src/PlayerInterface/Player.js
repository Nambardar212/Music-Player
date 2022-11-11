import React from "react";
import PlayerControl from "../Main/PlayerControl";
import SeekControl from "../Main/SeekControl";


const Player = ({uiState, setUiState, audioRef, songState, setSongState}) => {
    return (
        <div className="player">
            <SeekControl
              uiState={uiState}
              setUiState={setUiState}
              audioRef={audioRef}
              songState={songState}
              setSongState={setSongState}
            />
            <PlayerControl
               uiState={uiState}
               setUiState={setUiState}
               audioRef={audioRef}
               songState={songState}
               setSongState={setSongState}
            />
        </div>
    )
}


export default Player;