import React from 'react';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';
import camelCase from 'lodash.camelcase';
import InfoIcon from '../../components/InfoIcon';
import mappedComps from '../../mappedComps';

const { Panel } = Collapse;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
    console.log(this.context);
  }

  render() {
    const { home } = this.context.source;
    return (
      <Collapse bordered={false} defaultActiveKey={['About Me']}>
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
    );
  }
}

Home.contextTypes = {
  source: PropTypes.object, // eslint-disable0line
};
export default Home;
