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
      <h1>ya no le muevas tu</h1>
      <nel>Alv</nel>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/paginated" component={Paginated} />
      </h eader>
    </div>
  );
}

export default App;
