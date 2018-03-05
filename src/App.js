import './App.css';
import React, { Component } from 'react';
import SimpleLayout from './components/SimpleLayout';
import { Icon, Collapse } from 'antd';
import AboutMe from './components/AboutMe';
import InfoIcon from './components/InfoIcon';
import mappedComps from './mappedComps';

const Panel = Collapse.Panel;

class App extends Component {
  render() {
    return (
      <SimpleLayout render={(profile) => (
        <Collapse bordered={false} defaultActiveKey={['About Me']}>
          {mappedComps.map((item) => (
            <Panel header={<InfoIcon type={item.iconType} info={item.header} />} key={item.header}>
              {item.component()}
            </Panel>
          ))}
        </Collapse>
      )}>
      </SimpleLayout >
    );
  }
}

export default App;
