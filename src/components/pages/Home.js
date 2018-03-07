import React from 'react';
import { Collapse } from 'antd';
import InfoIcon from '../../components/InfoIcon';
import mappedComps from '../../mappedComps';

const { Panel } = Collapse;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Collapse bordered={false} defaultActiveKey={['About Me']}>
        {mappedComps.map(item => (
          <Panel header={<InfoIcon type={item.iconType} info={item.header} />} key={item.header}>
            {item.component()}
          </Panel>
        ))}
      </Collapse>
    );
  }
}

export default Home;
