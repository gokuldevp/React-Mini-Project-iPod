import './assets/css/MenuItem.css'; // Import the CSS file for styling

// Define a functional component called MenuItem that takes props as input
function MenuItem(props) {
    const item = props.item; // Destructure the item prop from props
    const selectedItem = props.menu.items[props.menu.selected]; // Get the selected item from the menu prop

    let style = {
        backgroundColor: 'white' // Initialize a style object with a white background color
    }

    if (item === selectedItem) {
        style.backgroundColor = 'blue'; // Update the background color to blue if the item matches the selected item
    }

    return (
        <div className='item' style={style}> {/* Create a div element with an 'item' CSS class and apply the style */}
            <p>{item}</p> {/* Display the item text */}
        </div>
    );
}

export default MenuItem; // Export the MenuItem component for use in other parts of the application
