import React, { useRef, useState } from 'react';
import './Styles/App.css';
import MenuHeader from './MenuHeader/MenuHeader';
import ArtWork from './Main/ArtWork';
import songData from './Data/SongData';
import SongInfo from './Main/SongInfo';
import Player from './PlayerInterface/Player';
import Library from './Layouts/Library/Library';
import About from './Layouts/About/About';

function App() {

  let userDarkModeApplied = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [uiState, setUiState] = useState({
      aboutShow: false,
      libraryShow: false,
      darkMode: userDarkModeApplied ? true : false,
      libraryPinned: false,
      coverSpinning: false,
      songPlaying: false,
      seekWidth: 0,
  });

  const [songState, setSongState] = useState({
    currentSong: [songData[0]],
    isPlaying: false,
    elapsed: 0,
    duration: 0,
  })

  const audioRef = useRef(null);

  document.body.style.backgroundImage = `url('${songState.currentSong[0].coverUrl}')`;

  const songEndHandler = async () => {
    let currentIndex = songData.findIndex((song) => 
        song === songState.currentSong[0]
    )
    await setSongState({
      ...songState,
      currentSong: [songData[(currentIndex + 1) % songData.length]]
    })
    audioRef.current.play();
  }

  const songInfoHandler = (e) => {
    const elapsed = e.target.currentTime;
    const duration = e.target.duration;
    setSongState({
      ...songState,
      duration: duration,
      elapsed: elapsed
    })
  }


  return (
    <div className={`app_wrapper ${uiState.darkMode ? "dark-mode" : "light-mode"}`}
      style={{backdropFilter: `${uiState.libraryShow || uiState.aboutShow ? "none" : "blur(1.5rem)"}`,
       WebkitBackdropFilter: `${uiState.libraryShow || uiState.aboutShow ? "none" : "blur(1.5rem)"}`,
    }}
    >
       <MenuHeader uiState={uiState} setUiState={setUiState} />
       <ArtWork uiState={uiState} songState={songState} />
       <SongInfo songState={songState} />
       <Player 
        uiState={uiState}
        setUiState={setUiState}
        audioRef={audioRef}
        songState={songState}
        setSongState={setSongState}
       />
       <Library
         uiState={uiState}
         setUiState={setUiState}
         songState={songState}
         setSongState={setSongState}
         songData={songData}
         audioRef={audioRef}
       />
       <About uiState={uiState} setUiState={setUiState} />
       <audio
          ref={audioRef}
          src={songState.currentSong[0].audio}
          onTimeUpdate={songInfoHandler}
          onLoadedMetadata={songInfoHandler}
          onEnded={songEndHandler}
       ></audio>
    </div>
  );
}

export default App;
