import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Row, Col, Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinkedIn from './widgets/LinkedIn';
import Twitter from './widgets/Twitter';
import Github from './widgets/Github';
import routeComponentMap from '../routeComponentMap';
import SocialIcons from './SocialIcons';

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
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
      </Menu>
    </Header>
    <Content style={{ padding: '1%' }}>
      <br />
      <div style={{ background: '#fff', paddingLeft: '1%', minHeight: 280 }}>
        <Row>
          <Col sm={24} md={18}>
            {children}
          </Col>
          <Col sm={24} md={6}>
            <SocialIcons social={source.social}/>
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
