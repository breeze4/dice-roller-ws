import React, { Component } from 'react';
import Pusher from 'pusher-js';

import Roller from './Roller';
import RollResult from './RollResult';

import logo from './D20.svg';
import './App.css';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

/* 
  -push button to roll a die
  -send message to backend asking for a die roll
  -server rolls appropriate dice
  -server sends event on websocket channel with result
  -aggregation/display happens on client
*/

class App extends Component {
  constructor(props) {
    super(props);

    const pusher = new Pusher('9eb50a2541510fd7b97c', {
      encrypted: true
    });
    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      const rolls = this.state.rolls.slice(0);
      const newResults = data.result || [];
      let combined = rolls.concat(newResults);
      if (combined.length > 10) {
        const start = combined.length - 10;
        combined = combined.slice(start, combined.length + 1);
      }
      this.setState({
        rolls: combined
      });
    });

    this.state = {
      rolls: []
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dice Roller</h2>
        </div>
        <div className="App-content">
          <Roller />
          <RollResult rolls={this.state.rolls} />
        </div>
      </div>
    );
  }
}

export default App;
