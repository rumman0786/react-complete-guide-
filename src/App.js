import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Rumman', age:29},
      {name: 'Abir', age:20},
      {name: 'Mahe', age:22}
    ]
  }

  switchNameHandler = () => {
    console.log("Was clicked!");
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am a React App Enthusiast</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Another Hobby of Gardenning</Person>
      </div>
    );

    // Above compiled code will look like below
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Hi! This is the content of the h1 tag')
    // );
  }
}

export default App;
