import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/searchbox/searchbox.component.jsx';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:'',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters: users}));
  }

  onSearchChange =event =>{
    this.setState({searchField: event.target.value});
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }

  render(){
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) 
      )
    return (
      
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>  
          <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
