import React from 'react'; // Import the React library
import './assets/css/Music.css'; // Import the CSS file for styling
import music from './assets/music/music1.mp3'; // Import the music file

// Define a functional component called Music that takes props as input
function Music(props) {
  return (
    <div className='music'> {/* Create a div element with a 'music' CSS class */}
      <audio autoPlay> {/* Create an audio element with autoPlay attribute */}
        <source src={music} type="audio/mp3" /> {/* Set the source and type of the audio */}
        Your browser does not support the audio element. {/* Display a message for unsupported browsers */}
      </audio>
    </div>
  );
}

export default Music; // Export the Music component for use in other parts of the application
