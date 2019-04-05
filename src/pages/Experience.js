/* eslint-disable  react/no-array-index-key */
import React from 'react';
import { Collapse, Tag } from 'antd';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import WidgetContainer from '../components/WidgetContainer';
import Paragraph from '../components/Paragraph';

const { Panel } = Collapse;

const ExperienceHeader = ({ item }) => (
  <React.Fragment>
    <b>{item.title}</b>- {item.company.name}{' '}
    <sup>
      <i>
        {format(item.startedAt, 'MMM YYYY')}
        {' - '}
        {item.endAt ? format(item.endAt, 'MMM YYYY') : 'current'}
      </i>
    </sup>
  </React.Fragment>
);
class Experience extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    const { experience } = this.context.source.home.tabs;
    return (
      <React.Fragment>
        <WidgetContainer title="Experience">
          <Paragraph>{experience.content}</Paragraph>
        </WidgetContainer>
        <Collapse bordered={false} defaultActiveKey={['Familiar']}>
          {experience.items.map((item, index) => (
            <Panel header={<ExperienceHeader item={item} />} key={index}>
              <Collapse bordered={false} defaultActiveKey={['no']}>
                <Panel header="Responsibility" key="responsibility">
                  <ul>
                    {item.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </Panel>
                <Panel header="Stacks" key="stacks">
                  {item.stacks.map(stack => (
                    <a
                      key={stack}
                      href={`https://www.google.com/search?q=${stack}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <Tag>
                        <i className={`devicon-${stack}-plain colored`} />
                        {stack.toUpperCase()}
                      </Tag>
                    </a>
                  ))}
                </Panel>
              </Collapse>
            </Panel>
          ))}
        </Collapse>
      </React.Fragment>
    );
  }
}
Experience.contextTypes = {
  source: PropTypes.object, // eslint-disable-line
};
export default Experience;
