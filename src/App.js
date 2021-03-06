import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { Route, Redirect } from 'react-router-dom'
import Users from './components/Users';
import CharacterList from './components/CharacterList';
import Paginated from './components/Paginated';

function App() {
  return (
    <div className="App">
      <h1>Pizza Time! 🍕</h1>
      <p>Ya es hora!!</p>
      <a>Lets Go!!</a>
    </div>
  );
}

export default App;
