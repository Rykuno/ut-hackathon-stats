import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import Progress from './Progress';
import '../css/App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/progress" component={Progress} />
      </div>
    );
  }
}

export default App;
