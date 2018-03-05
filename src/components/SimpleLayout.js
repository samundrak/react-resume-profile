import React from "react";
import { Helmet } from "react-helmet";
import { Timeline } from 'react-twitter-widgets'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import source from '../source';

const { Header, Content, Sider, Footer } = Layout;

class SimpleLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: source,
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { profile } = this.state;
    return (
      <Layout className="layout">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{profile.title}</title>
          <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        </Helmet>
        <Content style={{ padding: '0 50px' }}>
          <br />
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row>
              <Col span={6}>
                <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity={profile.social.linkedIn.username}>
                  <a className="LI-simple-link" href={'https://np.linkedin.com/in/${profile.social.linkedIn.username}?trk=profile-badge'}>{profile.title}</a>
                </div>
              </Col>
              <Col span={12}>
                {this.props.render(profile)}
              </Col>
              <Col span={6}>
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: profile.social.twitter.username
                  }}
                  options={{
                    username: profile.social.twitter.username,
                    height: '400'
                  }}
                />
              </Col>
            </Row></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          {profile.title}
        </Footer>
      </Layout>
    );
  }
}

export default SimpleLayout;
