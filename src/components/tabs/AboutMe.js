import React from 'react';

export default ({ content }) => (
  <p>
    <i dangerouslySetInnerHTML={{ __html: content }} />
  </p>
);
