import './assets/css/Menu.css'; // Import the CSS file for styling
import React from 'react'; // Import React correctly
import MenuItem from './MenuItem'; // Import the MenuItem component

// Define a functional component called Menu that takes props as input
function Menu(props) {
    const menu = props.menu; // Destructure the menu prop from props

    return (
        <div className='menu'> {/* Create a div element with a 'menu' CSS class */}
            <h1>{menu.heading}</h1> {/* Display the heading from the menu prop */}
            {menu.items && menu.items.length > 0 ? ( // Check if menu items exist and are not empty
                <ul> {/* Create an unordered list */}
                    {menu.items.map((item, index) => (
                        // Map through the menu items and render a MenuItem component for each item
                        <MenuItem
                            item={item} // Pass the current item as a prop to MenuItem
                            menu={menu} // Pass the entire menu object as a prop to MenuItem
                            key={`${item}-${index}`} // Generate a unique key for each MenuItem
                        />
                    ))}
                </ul>
            ) : (
                <p>No items available.</p> // Display a message if no items are available
            )}
        </div>
    );
}

export default Menu; // Export the Menu component for use in other parts of the application
