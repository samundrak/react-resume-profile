import React, { Fragment } from 'react';
import { Collapse } from 'antd';
import SkillCom from '../components/tabs/Skills';
import App from '../App';

const { Panel } = Collapse;

const data = [
  {
    title: 'Familiar',
    component: SkillCom,
  },
];
class Skills extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <App>
        {({ home }) => (
          <Collapse bordered={false} defaultActiveKey={['Familiar']}>
            {data.map((item) => (
              <Panel header={item.title} key={item.title}>
                {<item.component {...home.tabs.skills} />}
              </Panel>
            ))}
          </Collapse>
        )}
      </App>
    );
  }
}

export default Skills;
