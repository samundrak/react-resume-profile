import React from 'react';
import sortBy from 'lodash.sortby';
import { Tag, Tooltip } from 'antd';

export default ({ items: skills = [] } = {}) => (
  <React.Fragment>
    {sortBy(skills, 'years').map((skill, index) => (
      <span style={{ margin: '2px' }} key={index}>
        {skill.language ? (
          <a
            href={`https://google.com/search?q=${skill.language}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip
              title={`${skill.years} year(s) expeirence with ${skill.language}`}
            >
              <Tag style={{ marginBottom: '5px' }}>
                <i className={`devicon-${skill.language}-plain colored`} />{' '}
                {skill.language.toUpperCase()}
              </Tag>
            </Tooltip>
          </a>
        ) : (
          <a
            href={`https://google.com/search?q=${skill}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip title="I know it">
              <Tag style={{ marginBottom: '5px' }}>
                <i className={`devicon-${skill}-plain colored`} />{' '}
                {skill.toUpperCase()}
              </Tag>
            </Tooltip>
          </a>
        )}
      </span>
    ))}
  </React.Fragment>
);
