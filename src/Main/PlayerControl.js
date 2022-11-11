import React from "react";
import { RiPlayListLine, RiSunLine,
    RiMoonLine, RiSkipBackLine, RiSkipForwardLine } from "react-icons/ri";
import songData from "../Data/SongData";
import PlayerPlayButton from "./PlayerPlayButton";


const PlayerControl = ({uiState, setUiState, audioRef, songState, setSongState}) => {

    let currentIndex = songData.findIndex((song) => 
        song === songState.currentSong[0]
    );

    const previousSongHandler = () => {
        setTimeout(() => {
            if((currentIndex - 1) % songData.length === -1) {
                setSongState({
                    ...songState,
                    currentSong: [songData[songData.length -1]],
                })
            } else {
                setSongState({
                    ...songState,
                    currentSong: [
                        songData[(currentIndex - 1) % songData.length],
                    ],
                });
            }
            if(songState.isPlaying) {
                const playPromise = audioRef.current.play();
                if(playPromise !== undefined) {
                    playPromise.then((audio) => {
                        audioRef.current.play();
                    });
                }
            }
        }, 300);
    };

    const nextSongHandler = () => {
        setTimeout(() => {
            setSongState({
                ...songState,
                currentSong: [songData[(currentIndex + 1) % songData.length]]
            })
            if(songState.isPlaying) {
                audioRef.current.play();
            }
        }, 150)
    }
    
    const songEndHandler = async () => {
        await setSongState({
            ...songState,
            currentSong: [songData[(currentIndex + 1) % songData.length]],
        });
        if (songState.currentSong[0].isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => audioRef.current.play());
            }
        }
      };

    const darkModeToggleHandler = () => {
        setUiState({ ...uiState, darkMode: !uiState.darkMode})
    }

    const libraryToggleHandler = (e) => {
        if (window.visualViewport.width < 900) {
            setUiState({ ...uiState, libraryShow: true});
            console.log("chnaged");
        }
    }

    const DarkModeButton = () => {
        if(!uiState.darkMode) {
            return (
                <RiMoonLine 
                   className="player_control-icon"
                   onClick={darkModeToggleHandler}
                />
            )
        } else {
            return (
                <RiSunLine 
                   className="player_control-icon"
                   onClick={darkModeToggleHandler}
                />
            )
        }
    }

    return(
        <div className="player_control">
            <RiPlayListLine
               uiState={uiState}
               setUiState={setUiState}
               className="player_control-icon disabled-on-desktop"
               onClick={libraryToggleHandler}
            />
            <RiSkipBackLine 
                className="player_control-icon"
                onClick={previousSongHandler}
            />
            <PlayerPlayButton 
               uiState={uiState}
               setUiState={setUiState}
               audioRef={audioRef}
               songState={songState}
               setSongState={setSongState}
            />
            <RiSkipForwardLine 
               className="player_control-icon"
               onClick={nextSongHandler}
            />
            <DarkModeButton />
        </div>
    )
}

export default PlayerControl;