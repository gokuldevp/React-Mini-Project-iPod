import React from 'react'; // Import React correctly
import './assets/css/App.css';
import Wheel from './Wheel.js';
import Screen from './Screen.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      items: ["Music", "Games", "Settings"],
      menu_display: false,
      selected: 0
    }
  }



  handleOpenMenu = () => {
    this.setState({menu_display: true, selected: 0})
  }

  handleCloseMenu = () => {
    this.setState({menu_display: false})
  }


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
        />
      </div>
    );
  }
  }


export default App;
