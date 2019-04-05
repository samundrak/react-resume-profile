import React from 'react';
import PropTypes from 'prop-types';

const LinkedIn = ({ username, title }) => (
  <div
    className="LI-profile-badge"
    data-version="v1"
    data-size="medium"
    data-locale="en_US"
    data-type="vertical"
    data-theme="light"
    data-vanity={username}
  >
    <a className="LI-simple-link" href={`https://np.linkedin.com/in/${username}?trk=profile-badge`}>
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
