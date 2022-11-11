import React from "react";
import {RiPlayFill} from "react-icons/ri";
import {IoIosPause} from "react-icons/io";
import shadow from "../Utils/Shadow";
import colors from "../Utils/Colors";
import gradients from "../Utils/Gradient";


const PlayerPlayButton = ({uiState, setUiState, audioRef, songState, setSongState}) => {
    
    const currentPalette = songState.currentSong[0].palette;

    const playPauseHandler = () => {
        setUiState({ ...uiState, songPlaying: !uiState.songPlaying})
        if(uiState.songPlaying === true) {
            audioRef.current.pause();
            setSongState({ ...songState, isPlaying: false})
        } else {
            audioRef.current.play();
            setSongState({ ...songState, isPlaying: true})
        }
    }

    const PlayPauseButton = () => {
        if(uiState.songPlaying) {
            return (
                <IoIosPause className="player_control-icon player_control-icon-white" />
            )
        } else {
            return (
                <RiPlayFill className="player_control-icon player_control-icon-white" />
            )
        }
    }
    
    return (
        <div className="player_control-play-button"
          onClick={playPauseHandler}
          style={{boxShadow: `${shadow(0,0,15,0,colors[`${currentPalette}`])}`,
           background: `${gradients[`${currentPalette}`]}`,
        }}
        >
          <PlayPauseButton />    
        </div>
    )
}


export default PlayerPlayButton;