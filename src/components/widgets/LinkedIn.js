import React from 'react';
import PropTypes from 'prop-types';

const LinkedIn = ({ username, title }) => (
  <div
    style={{ width: '100%', padding: '5%' }}
    className="LI-profile-badge"
    data-version="v1"
    data-size="medium"
    data-locale="en_US"
    data-type="vertical"
    data-theme="light"
    data-vanity={username}
  >
    <a className="LI-simple-link" href={`https://np.linkedin.com/in/${username}`}>
      {title}
    </a>
  </div>
);

LinkedIn.defaultProps = {
  title: null,
};
LinkedIn.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default LinkedIn;
