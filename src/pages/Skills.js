import React, { Fragment } from 'react';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';
import SkillCom from '../components/tabs/Skills';
import SkillChart from '../components/charts/Skills';
import ExpertiseChart from '../components/charts/Expertise';
import DepartmentChart from '../components/charts/Department';

const { Panel } = Collapse;

const data = [
  {
    title: 'Familiar',
    component: SkillCom,
  },
  {
    title: 'Skills',
    component: SkillChart,
  },
  {
    title: 'Expertise',
    component: ExpertiseChart,
  },
  {
    title: 'Department',
    component: DepartmentChart,
  },
];
class Skills extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    const { home } = this.context.source;
    if (!home) return <Fragment>Loading</Fragment>;
    return (
      <Collapse bordered={false} defaultActiveKey={['Familiar']}>
        {data.map(item => (
          <Panel header={item.title} key={item.title}>
            {<item.component {...home.tabs.skills} />}
          </Panel>
        ))}
      </Collapse>
    );
  }
}

Skills.contextTypes = {
  source: PropTypes.object, // eslint-disable-line
};
export default Skills;
