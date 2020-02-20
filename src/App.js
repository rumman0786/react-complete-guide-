import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App Enthusiast</h1>
      </div>
    );

    // Above compiled code will look like below
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Hi! This is the content of the h1 tag')
    // );
  }
}

export default App;
