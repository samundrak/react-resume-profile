import React, { Fragment } from 'react';
import { Collapse, List, Avatar, Popover } from 'antd';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import { limitString } from '../utils';
import InfoIcon from '../components/InfoIcon';
import App from '../App';

const { Panel } = Collapse;

class Projects extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      lightboxIsOpen: false,
    };
    this.imageAddressInLightbox = new Map();
  }
  gotoNextLightboxImage = () => {
    this.setState({
      current: this.state.current+1
    })
  }
  gotoPrevLightboxImage = () =>{
    this.setState({
      current: this.state.current-1
    })
  }
  closeLightbox = () => {
    this.setState({
      lightboxIsOpen: false,
    });
  };
  getImagesOfProjects = (projects)=> {
    const images = [];
    projects.forEach((project, indexOfProject) =>
      project.items.forEach((item, indexOfItem) => {
        if (item.img) {
          this.imageAddressInLightbox.set(`${indexOfProject}-${indexOfItem}`, {
            index: images.push({ src: item.img ,caption: item.description})-1,
          });
        }
      }));
    return images;
  }
  componentDidMount() {
    console.log(this.context);
  }
  handleOpenImage(a, b) {
    return () => {
      console.log(a, b);
      this.setState({
        lightboxIsOpen: true,
        current: this.imageAddressInLightbox.get(`${a}-${b}`).index,
      });
    };
  }
  render() {
    return (
      <App>
        {({ projects }) => (
          <Fragment>
            <Lightbox
              backdropClosesModal
              currentImage={this.state.current}
              images={this.getImagesOfProjects(projects)}
              isOpen={this.state.lightboxIsOpen}
              onClickPrev={this.gotoPrevLightboxImage}
              onClickNext={this.gotoNextLightboxImage}
              onClose={this.closeLightbox}
            />
            <Collapse bordered={false} defaultActiveKey={projects.map(project => project.name)}>
              {projects.map((project, indexOfCategory) => (
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
                    renderItem={(item, indexOfProject) => (
                      <List.Item
                        key={item.name}
                        extra={
                          item.img ? (
                            <img
                              width={272}
                              alt="logo"
                              onClick={this.handleOpenImage(indexOfCategory, indexOfProject)}
                              src={item.img}
                            />
                          ) : (
                            ''
                          )
                        }
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
