/* eslint-disable  react/no-array-index-key */
import React from 'react';
import { Collapse, Tag } from 'antd';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import App from '../App';

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
    return (
      <App>
        {({
          home: {
            tabs: { experience },
          },
        }) => (
          <React.Fragment>
            <h3>Experience</h3>{' '}
            <p>
              <i>{experience.content} </i>
            </p>
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
                      {item.stacks.map((stack) => (
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
        )}
      </App>
    );
  }
}
Experience.contextTypes = {
  source: PropTypes.object, // eslint-disable-line
};
export default Experience;
