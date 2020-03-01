import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Rumman', age:29},
      {name: 'Abir', age:20},
      {name: 'Mahe', age:22}
    ]
  });

  const [otherState, setOtherState] = useState("Some Other value");
  
  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        {name: 'Imran', age:35},
        {name: 'Abir', age:20},
        {name: 'Mahe', age:27}
      ]  
    });
  }

  return (
    <div className="App">
      <h1>Hi I am a React App Enthusiast</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}>Another Hobby of Gardenning</Person>
      <div>{otherState}</div>
    </div>
  );

  // Above compiled code will look like below
  // return React.createElement('div', {className: 'App'},
  //   React.createElement('h1', null, 'Hi! This is the content of the h1 tag')
  // );
}

export default App;
