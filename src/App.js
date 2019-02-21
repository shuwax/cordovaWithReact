import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  onclickAdd = () => {
    const counter = this.state.counter + 1;
    this.setState({counter: counter})
  }
  onclickMin = () => {
    const counter = this.state.counter - 1;
    this.setState({counter: counter})
  }

  render() {
    const divStyle = {
      margin: '40px',
      border: '5px solid pink',
      width: '300px'
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.onclickAdd()} style={divStyle}>+</button>
          <button onClick={() => this.onclickMin()} style={divStyle}> -</button>
          <p>{this.state.counter}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
