/* eslint-disable react/no-did-mount-set-state */
import React, { Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;
class Github extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const profile = await axios.get(`https://api.github.com/users/${this.props.username}`);
    this.setState({ ...profile.data, loading: false });
  }
  render() {
    return (
      <Card
        style={{ width: 300 }}
        loading={this.state.loading}
        actions={[
          <Fragment>
            Repositories
            <br />
            {this.state.public_repos}
          </Fragment>,
          <Fragment>
            Followers
            <br />
            {this.state.followers}
          </Fragment>,
          <Fragment>
            Following
            <br />
            {this.state.following}
          </Fragment>,
        ]}
      >
        <Meta
          avatar={<Avatar src={this.state.avatar_url} />}
          title={
            <a target="_blank" rel="noopener" href={this.state.html_url}>
              {this.state.name} on Github
            </a>
          }
          description={this.state.bio}
        />
      </Card>
    );
  }
}

Github.propTypes = {
  username: PropTypes.string.isRequired,
};
export default Github;
