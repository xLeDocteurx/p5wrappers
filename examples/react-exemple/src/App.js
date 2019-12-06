import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <MyComponent />
    </div>
  );
}

export default App;
