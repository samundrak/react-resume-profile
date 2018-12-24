import React, { Fragment } from 'react';
import { Collapse, List, Popover } from 'antd';
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
            <h3>Projects i have been part of.</h3>
            <Collapse bordered={false} defaultActiveKey={['Familiar']}>
              {projects.map((project) => (
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
                    itemLayout="horizontal"
                    dataSource={project.items}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          title={
                            <a target="_blank" rel="noopener" href={item.url}>
                              {item.name}
                            </a>
                          }
                          description={
                            <Popover content={item.description}>
                              {limitString(item.description, 150)}
                            </Popover>
                          }
                        />
                        <div title="My role on this project">
                          <b>
                            <i> {item.role ? item.role : 'Author'}</i>
                          </b>
                        </div>
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
