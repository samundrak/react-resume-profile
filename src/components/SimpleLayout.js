import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Row, Col, Menu, Avatar } from 'antd';
import PropTypes from 'prop-types';
import MyPhoto from '../me.png';
import routeComponentMap from '../routeComponentMap';
import SocialIcons from './SocialIcons';
import WidgetContainer from '../components/WidgetContainer';

const { Header, Content, Footer } = Layout;

const SimpleLayout = ({ source, children }) => (
  <Layout className="layout">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{source.title}</title>
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      />
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
      />
    </Helmet>
    <Header style={{ backgroundColor: '#fff' }}>
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        {routeComponentMap
          .filter(menu => menu.inMenu)
          .map(menu => (
            <Menu.Item key={menu.name}>
              <a href={menu.route}>{menu.name}</a>
            </Menu.Item>
          ))}
        <Menu.Item key="notes">
          <a href="https://notes.samundrakc.com.np">Notes</a>
        </Menu.Item>
      </Menu>
    </Header>
    <Content>
      <br />
      <div style={{ background: '#fff', paddingLeft: '1%', minHeight: 280 }}>
        <Row>
          <Col md={6}>
            <WidgetContainer
              title="I look like this"
              style={{ justifyContent: 'center', display: 'flex' }}
            >
              <img src={MyPhoto} alt="samundra khatri" style={{ flex: 1, padding: '2%' }} />
            </WidgetContainer>
          </Col>
          <Col sm={24} md={12}>
            {children}
          </Col>
          <Col sm={24} md={6}>
            <WidgetContainer title="Coding,Ranting and Sharing here">
              <SocialIcons social={source.social} />
            </WidgetContainer>
          </Col>
        </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      <a href="https://github.com/samundrak/react-resume-profile">
        Look source code of this project
      </a>{' '}
    </Footer>
  </Layout>
);

SimpleLayout.propTypes = {
  children: PropTypes.element.isRequired,
  source: PropTypes.object.isRequired, // eslint-disable-line
};
export default SimpleLayout;
