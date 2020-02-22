import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App Enthusiast</h1>
        <p>This is really working!</p>
        <Person name="Rumman" age="29"/>
        <Person name="Abir" age="20"/>
        <Person name="Mahe" age="21"/>
      </div>
    );

    // Above compiled code will look like below
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Hi! This is the content of the h1 tag')
    // );
  }
}

export default App;
