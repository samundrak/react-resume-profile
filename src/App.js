import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import dataSource from './source';
import SimpleLayout from './components/SimpleLayout';
import Routes from './Routes';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      source: dataSource,
    };
  }
  getChildContext() {
    return { source: this.state.source };
  }
  render() {
    return (
      <Router>
        <SimpleLayout source={this.state.source}>
          <Routes pages={this.state.pages} />
        </SimpleLayout>
      </Router>
    );
  }
}

App.childContextTypes = {
  source: PropsTypes.object,
};
export default App;
