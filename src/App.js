import React, { Component, Children } from 'react';
import PropsTypes from 'prop-types';
import dataSource from './source';
import SimpleLayout from './components/SimpleLayout';
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
        <SimpleLayout source={dataSource}>
          {this.props.children(dataSource)}
        </SimpleLayout>
      </SourceContext.Provider>
    );
  }
}

App.childContextTypes = {
  source: PropsTypes.object,
};
export default App;
