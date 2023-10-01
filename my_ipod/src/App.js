import React from 'react'; // Import React correctly
import './assets/css/App.css';
import Wheel from './Wheel.js';
import Screen from './Screen.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      heading:"Ipad.js",
      items: ["Music", "Games", "Settings"],
      menu_display: false,
      selected: 0,
      isPlay: false,
    }
  }

  // Toggle play state or switch menu items
  handlePlay = () => {
    const itemsList = {
      "Music":["PlayMusic","Album", "Artists", "Songs"],
      "Games":["GTA","Snake", "Ball"],
      "Settings":["Sound", "Display", "About", "Software update"],
    }

    this.setState((prevState) => {
      const selectedItem = prevState.items[prevState.selected]
      if(selectedItem==="PlayMusic"){
        this.setState({isPlay: !prevState.isPlay, heading:selectedItem})
        return;
      } else if (!prevState.items) {
        return {items:[], heading: selectedItem}
      } else {
        return {items:itemsList[selectedItem], heading: selectedItem}
      }
    })
  }

  // Open the menu
  handleOpenMenu = () => {
    this.setState({menu_display: true, selected: 0, items:["Music", "Games", "Settings"], heading:"Ipad.js"})
  }

  // Close the menu
  handleCloseMenu = () => {
    this.setState({menu_display: false})
  }

  // Navigate to the next menu item
  handleNextIcon = () => {
    this.setState((prevState) => {
      if (prevState.menu_display) {
        if (prevState.selected < prevState.items.length - 1) {
          return { selected: prevState.selected + 1 };
        } else {
          return {selected: 0}
        }
      }
    });
  }

  // Navigate to the previous menu item
  handlePrevIcon = () => {
    this.setState((prevState) => {
      if (prevState.menu_display) {
        if (prevState.selected > 0) {
          return { selected: prevState.selected - 1 };
        } else {
          return {selected: prevState.items.length - 1}
        }
      }
    });
  }

  render() {
    const menu = this.state;
    return (
      <div className="App">
        <Screen
        menu = {menu}
        />
        <Wheel
        handleOpenMenu={this.handleOpenMenu}
        handleCloseMenu={this.handleCloseMenu}
        handleNextIcon={this.handleNextIcon}
        handlePrevIcon={this.handlePrevIcon}
        handlePlay={this.handlePlay}
        />
      </div>
    );
  }
}

export default App;
