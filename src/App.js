import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchedStr: ""
    };
  }

  handleChange = e => {
    this.setState({ searchedStr: e.target.value });
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
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder="search monster"
          onChangedHandler={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
