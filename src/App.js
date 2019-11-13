import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js'
import SuccessMessage from './SuccessMessage.js'

class App extends Component {
  state = {  
    complete: false,  
    firstName: '',
    pokemon: {},
  }

  async componentDidMount() {  
    const data = await fetch('https://pokeapi.co/api/v2/pokedex/1/').then(res => res.json())  
    this.setState({pokemon: data})  
  }

  handleSubmit = e => {  
    e.preventDefault()
    this.setState({ complete: true })  
    document.cookie = `firstName=${this.state.firstName}`
  }

  handleInput = e => {  
    this.setState({firstName: e.currentTarget.value})  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav role='navigation'>
            <ul className='navbar'>
              <li className="nal-li"><a href="#">Batman</a></li>
              <li className="nal-li"><a href="#">Supermman</a></li>
              <li className="nal-li"><a href="#">Aquaman</a></li>
              <li className="nal-li"><a href="#">Wonder Woman</a></li>
            </ul>
          </nav>
        </header>
        <h3 data-testid="pokemon">  
          {this.state.pokemon.name ? 'Received Pokemon data!' : 'Something went wrong'}  
        </h3>
        { this.state.complete ?   
          <SuccessMessage/>   
          :   
          <Login submit={this.handleSubmit} input={this.handleInput} />  
        }
      </div>
    );
  }
}

export default App;