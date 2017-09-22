import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from "./SearchBox";
import Hijo from "./Hijo.js";



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      myself:[],
      followers:[],
      components:[],
      maxFollowers:"5",

    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  onSearch(user){
    const self = this;
    let datos = [];
    console.log(user)
    fetch("/getFollowers/" + user)
    .then((res)=>res.json())
    .then((data)=> {
      console.log(data)
      if(data.error){
        window.alert("No ha sido posible encontrar al usuario especificado");
      }
      this.setState({myself:data  });
      console.log(data)
      this.setState({followers:data.seguidores.data});
    } )
    .catch(error  => {
      console.log('There has been a problem with your fetch operation: '+ error.message);
    });
  }
  render() {
    var followers = this.state.followers;
    const self = this;
    return (
      <div className="App"> 
      <div className="App-header">

      <div><h1>Github Followers</h1>
      <h3>Busca a cualquier usuario en GitHub y ve sus seguidores en tiempo real!</h3>
      <SearchBox onSearch={this.onSearch.bind(this)} />
      <div className="opciones">
      <div><h4>Máximo número de followers mostrados</h4>
      <div>
      <select id = "dropdown" onChange = { this.handleChange}>
      <option value="5">Seleccionar</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      </select>
      <h6> (Default = 5)</h6></div>
      </div>
      </div>
      </div>
      {this.state.myself != undefined && this.state.myself.length != 0 && (<ul><li className="rootLi">
        <div className="click-to-top"><img src={this.state.myself.avatar_url} className="root" />
        <span>
        {this.state.myself.name}
        </span></div>

        </li></ul>)}

      <ul className="lists">
      {followers.map(function(follower, i){  
        console.log(follower)
        if(i < parseInt(self.state.maxFollowers))
          return (<li><Hijo source={follower.avatar_url} url = {follower.html_url} user = {follower.login} maxFollowers={self.state.maxFollowers}/></li>)
      })}
      </ul>
      </div>
      </div>
      );
  }
  handleChange(event){
    this.setState({maxFollowers: event.target.value});
  }
}

export default App;
