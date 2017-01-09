import React, { Component } from 'react'
import './styles/App.css'
import Header from './components/Header'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header foo="bar"></Header>
        <div className="App-intro">
          <p>
            <Link to="/">Home</Link>
             &nbsp; | &nbsp;
            <Link to="/shop">Go to store</Link>
            &nbsp; | &nbsp;
            <Link to="/contact">contact</Link>
          </p>
          
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App
