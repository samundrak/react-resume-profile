import React, { Fragment } from 'react';
import { List } from 'antd';
import PropTypes from 'prop-types';
import SkillCom from '../components/tabs/Skills';

const data = [
  {
    title: 'Skills',
    component: SkillCom,
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
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={<item.component {...home.tabs.skills} />}
            />
          </List.Item>
        )}
      />
    );
  }
}

Skills.contextTypes = {
  source: PropTypes.object, // eslint-disable-line
};
export default Skills;
