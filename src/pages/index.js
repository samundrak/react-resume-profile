import React from 'react';
import { Collapse } from 'antd';
import camelCase from 'lodash.camelcase';
import InfoIcon from '../components/InfoIcon';
import mappedComps from '../mappedComps';
import App from '../App';

const { Panel } = Collapse;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <App>
        {({ home }) => (
          <Collapse
            style={{ width: '100%' }}
            bordered={false}
            defaultActiveKey={['About Me', 'Skills', 'Experience']}
          >
            {home
              ? mappedComps.map(item => (
                <Panel
                  header={<InfoIcon type={item.iconType} info={item.header} />}
                  key={item.header}
                >
                  {item.component(home.tabs[camelCase(item.header)])}
                </Panel>
                ))
              : ''}
          </Collapse>
        )}
      </App>
    );
  }
}

export default Home;
