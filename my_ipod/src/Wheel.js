import React from 'react'; // Import the React library
import './assets/css/Wheel.css'; // Import the CSS file for styling
import nextIcon from './assets/images/next.png'; // Import the next icon image
import prevIcon from './assets/images/prev.png'; // Import the previous icon image
import playIcon from './assets/images/play.png'; // Import the play icon image

// Define a functional component called Wheel that takes props as input
function Wheel(props) {
  // Destructure the functions from the props object
  const { handleOpenMenu, handleCloseMenu, handleNextIcon, handlePrevIcon, handlePlay } = props;

  return (
    <div className="wheel-container"> {/* Create a div element with a 'wheel-container' CSS class */}
      <div className="wheel"> {/* Create a div element with a 'wheel' CSS class */}
        <div
          id="home"
          onClick={() => handleCloseMenu()} // Add an onClick event handler for closing the menu
        >
          Menu
        </div>

        <div
          id="next"
          onClick={() => handleNextIcon()} // Add an onClick event handler for handling next icon click
        >
          <img className='icon-img' alt='nextIcon' src={nextIcon} /> {/* Display the next icon */}
        </div>

        <div
          id="play"
          onClick={() => handlePlay()} // Add an onClick event handler for handling play icon click
        >
          <img className='icon-img' alt='playIcon' src={playIcon} /> {/* Display the play icon */}
        </div>

        <div
          id="prev"
          onClick={() => handlePrevIcon()} // Add an onClick event handler for handling previous icon click
        >
          <img className='icon-img' alt='prevIcon' src={prevIcon} /> {/* Display the previous icon */}
        </div>

        <div
          id="menu"
          className="center-btn"
          onClick={() => handleOpenMenu()} // Add an onClick event handler for opening the menu
        >
          {/* This div serves as a center button */}
        </div>
      </div>
    </div>
  );
}

export default Wheel; // Export the Wheel component for use in other parts of the application
