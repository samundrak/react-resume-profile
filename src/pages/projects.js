import React, { Fragment } from 'react';
import { Collapse, List, Avatar, Popover } from 'antd';
import PropTypes from 'prop-types';
import { limitString } from '../utils';
import InfoIcon from '../components/InfoIcon';
import App from '../App';

const { Panel } = Collapse;

class Projects extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <App>
        {({ projects }) => (
          <Fragment>
            <Collapse bordered={false} defaultActiveKey={['Web', 'web']}>
              {projects.map(project => (
                <Panel
                  header={
                    <InfoIcon
                      type={project.icon}
                      info={`${project.name} (${project.items.length})`}
                    />
                  }
                  key={project.name}
                >
                  <List
                    itemLayout="vertical"
                    size="small"
                    dataSource={project.items}
                    renderItem={item => (
                      <List.Item
                        key={item.name}
                        extra={item.img ? <img width={272} alt="logo" src={item.img} /> : ''}
                      >
                        <List.Item.Meta
                          title={
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={item.url}
                              style={{ textDecoration: 'underline' }}
                            >
                              {item.name}
                            </a>
                          }
                          description={
                            <div title="My role on this project">
                              <i> {item.role ? item.role : 'Author'}</i>
                            </div>
                          }
                        />
                        <Popover content={item.description} overlayStyle={{ width: '350px' }}>
                          {limitString(item.description, 150)}
                        </Popover>
                        <br />
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://notes.samundrakc.com.np/project/${item.name.toLowerCase()}`}
                        >
                          Read Story...
                        </a>
                      </List.Item>
                    )}
                  />
                </Panel>
              ))}
            </Collapse>
          </Fragment>
        )}
      </App>
    );
  }
}

Projects.contextTypes = {
  source: PropTypes.object, // eslint-disable-line
};
export default Projects;
