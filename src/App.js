import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import dataSource from './source';
import SimpleLayout from './components/SimpleLayout';
import Routes from './Routes';
import SourceContext from './contexts/source';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      source: dataSource,
    };
  }
  getChildContext() {
    return { source: dataSource };
  }
  render() {
    return (
      <SourceContext.Provider value={dataSource}>
        <SimpleLayout source={dataSource}>{this.props.children(dataSource)}</SimpleLayout>
      </SourceContext.Provider>
    );
  }
}

App.childContextTypes = {
  source: PropsTypes.object,
};
export default App;
