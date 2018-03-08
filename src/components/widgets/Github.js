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
    // this.setState({ loading: true });
    // const profile = await axios.get(`https://api.github.com/users/${this.props.username}`);
    // this.setState({ ...profile.data, loading: false });

    this.setState({
      login: 'samundrak',
      id: 3079452,
      avatar_url: 'https://avatars0.githubusercontent.com/u/3079452?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/samundrak',
      html_url: 'https://github.com/samundrak',
      followers_url: 'https://api.github.com/users/samundrak/followers',
      following_url: 'https://api.github.com/users/samundrak/following{/other_user}',
      gists_url: 'https://api.github.com/users/samundrak/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/samundrak/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/samundrak/subscriptions',
      organizations_url: 'https://api.github.com/users/samundrak/orgs',
      repos_url: 'https://api.github.com/users/samundrak/repos',
      events_url: 'https://api.github.com/users/samundrak/events{/privacy}',
      received_events_url: 'https://api.github.com/users/samundrak/received_events',
      type: 'User',
      site_admin: false,
      name: 'Samundra Khatri',
      company: 'Javra Software',
      blog: 'https://twitter.com/kardnumas',
      location: 'Kathmandu , Nepal',
      email: null,
      hireable: true,
      bio: ' ❤️ building stuffs with javascript 🍻 ',
      public_repos: 87,
      public_gists: 25,
      followers: 80,
      following: 229,
      created_at: '2012-12-19T09:12:09Z',
      updated_at: '2018-03-07T06:08:03Z',
    });
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
