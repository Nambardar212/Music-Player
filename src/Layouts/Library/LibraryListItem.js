import React from "react";
import songData from "../../Data/SongData";
import LibrarySongArtist from "./LibrarySongArtist";
import LibrarySongCover from "./LibrarySongCover";
import LibrarySongTitle from "./LibrarySongTitle";


const LibraryListItem = ({song, songState, setSongState, audioRef}) => {
 
    const changeCurrentSongHandler = () => {
        setInterval(() => {
            setSongState({
                ...songState,
                currentSong: [songData[songData.findIndex((s) => s === song)]]
            })
            console.log(songState.isPlaying)
            if(songState.isPlaying) {
                const playPromise = audioRef.current.play();
                console.log(playPromise)
                if(playPromise !== undefined) {
                    console.log("undefined")
                    playPromise.then((audio) => {
                        audioRef.current.play();
                    })
                }
            }
        }, 150)
    }

    return (
        <div onClick={changeCurrentSongHandler} 
           className={`library_list-item ${
              song.id === songState.currentSong[0].id ? "active-song" : ""
           }`}
        >
            <LibrarySongCover song={song} />
            <div className="library_song-column">
                <LibrarySongTitle song={song} />
                <LibrarySongArtist song={song} />
            </div>
        </div>
    )
}


export default LibraryListItem;