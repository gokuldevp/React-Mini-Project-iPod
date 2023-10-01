import React from 'react'; // Import the React library
import './assets/css/Screen.css'; // Import the CSS file for styling
import Menu from './Menu'; // Import the Menu component
import Music from './Music'; // Import the Music component

// Define a functional component called Screen that takes props as input
function Screen(props) {
  const menu = props.menu; // Destructure the 'menu' prop from the props object

  return (
    <div className='screen'> {/* Create a div element with a 'screen' CSS class */}
      {menu.isPlay ? <Music menu={menu} /> : null} {/* Conditionally render the Music component based on 'menu.isPlay' */}
      {menu.menu_display ? <Menu menu={menu} /> : null} {/* Conditionally render the Menu component based on 'menu.menu_display' */}
    </div>
  );
}

export default Screen; // Export the Screen component for use in other parts of the application
