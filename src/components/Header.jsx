import React from 'react';
import logo from '../logo.svg';

const Header = ({ foo }) => (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React baby! {foo}</h2>
    </div>
  )

export default Header