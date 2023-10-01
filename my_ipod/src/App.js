import React from 'react'; // Import React correctly
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import './assets/css/App.css';
import Wheel from './Wheel.js';
import Screen from './Screen.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = []
  }
  
  render() {
    return (
      <div className="App">
        <Screen/>
        <Wheel/>
      </div>
    );
  }
  }


export default App;
