import React from 'react';
import PropTypes from 'prop-types';
import { Timeline } from 'react-twitter-widgets';

const Twitter = ({ username, height }) => (
  <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: username,
    }}
    options={{
      username,
      height,
    }}
  />
);

Twitter.defaultProps = {
  height: 400,
};
Twitter.propTypes = {
  username: PropTypes.string.isRequired,
  height: PropTypes.number,
};

export default Twitter;
