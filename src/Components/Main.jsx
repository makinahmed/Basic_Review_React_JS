import React, { Component } from "react";
import Person from "./Person";
export default class Main extends Component {
  state = {
    persons: [
      { id: "555", name: "", age: "55" },
      { id: "000", name: "", age: "45" },
      { id: "777", name: "", age: "74" },
    ],
    otherState: "Some other Values",
    showPersons: false,
  };

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  deleteHandle = (deleteIndex) => {
    const person = this.state.persons;
    person.splice(deleteIndex, 1);
    this.setState({
      person: person,
    });
  };


  onChangeHandler = (e) => {
    this.setState({
      persons: [
        { id: "555", name: "Makin", age: "55" },
        { id: "000", name: e.target.value, age: "45" },
        { id: "777", name: "A. Rahaman", age: "74" },
      ]
       
      
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => {
                  this.deleteHandle(index);
                  console.log("Yes GOT IT!");
                }}
                name={person.name}
                age={person.age}
                changed= {this.onChangeHandler}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <h2>I am a React App</h2>
        <button onClick={this.togglePerson}>Toggle Person</button>
        <br />
        <br />
        {persons}
      </div>
    );
  }
}
