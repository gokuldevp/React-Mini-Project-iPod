import React from 'react'; // Import React correctly
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import './assets/css/App.css';
import Wheel from './Wheel.js';
import Screen from './Screen.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      list_items: ["Music", "Games", "Settings"],
      menu_display: false
    }
  }

  handleOpenMenu = () => {
    this.setState({menu_display: true})
  }

  handleCloseMenu = () => {
    this.setState({menu_display: false})
  }

  render() {
    const {list_items, menu_display} = this.state;
    return (
      <div className="App">

        <Screen
        menu_display= {menu_display}
        list_items= {list_items}
        />

        <Wheel
        handleOpenMenu={this.handleOpenMenu}
        handleCloseMenu={this.handleCloseMenu}
        />
      </div>
    );
  }
  }


export default App;
