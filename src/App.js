import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  state = {
    monsters: [],
    searchedStr: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchedStr } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchedStr.toLowerCase());
    });
    return (
      <div className="App">
        <input
          placeholder="search monsters"
          onChange={e => this.setState({ searchedStr: e.target.value })}
        ></input>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
