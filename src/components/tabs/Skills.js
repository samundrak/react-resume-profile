import React from 'react';
import sortBy from 'lodash.sortby';
import { Tag, Tooltip } from 'antd';

export default ({ items: skills = [] } = {}) => (
  <React.Fragment>
    {sortBy(skills, 'years').map((skill, index) => (
      <span style={{ margin: '2px' }} key={index}>
        {skill.language ? (
          <Tooltip title={`${skill.years} year(s) expeirence with ${skill.language}`}>
            <Tag>
              <i className={`devicon-${skill.language}-plain colored`} />{' '}
              {skill.language.toUpperCase()}
            </Tag>
          </Tooltip>
        ) : (
          <Tooltip title="I know it">
            <Tag>
              <i className={`devicon-${skill}-plain colored`} /> {skill.toUpperCase()}
            </Tag>
          </Tooltip>
        )}
      </span>
    ))}
  </React.Fragment>
);
