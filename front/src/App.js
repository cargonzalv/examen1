import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from "./SearchBox";

class App extends Component {
  componentDidMount(){
    fetch("/getFollowers/john-guerra")
    .then((res)=>res.json())
    .then((json)=> console.log(json))
  }
  onSearch(user){
    fetch("/getFollowers/" + user)
    .then((res)=>res.json())
    .then((json)=> console.log(json))
  }
  render() {
    return (
      <div className="App">
        <div className="Twitter Followers">
        <SearchBox onSearch={this.onSearch} />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
