import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import LinkedIn from './widgets/LinkedIn';
import Twitter from './widgets/Twitter';

const { Content, Footer } = Layout;

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
      <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
    </Helmet>
    <Content style={{ padding: '0 50px' }}>
      <br />
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Row>
          <Col span={6}>
            {source.social.linkedIn && (
              <LinkedIn username={source.social.linkedIn.username} title={source.title} />
            )}
          </Col>
          <Col span={12}>{children}</Col>
          <Col span={6}>
            {source.social.twitter && <Twitter username={source.social.twitter.username} />}
          </Col>
        </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>{source.title}</Footer>
  </Layout>
);

SimpleLayout.propTypes = {
  children: PropTypes.element.isRequired,
  source: PropTypes.object.isRequired, // eslint-disable-line
};
export default SimpleLayout;
