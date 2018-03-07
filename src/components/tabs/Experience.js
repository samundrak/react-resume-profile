import React, { Fragment } from 'react';
import { Timeline } from 'antd';
import { format } from 'date-fns';

export default ({ items: experiences }) => (
    <Fragment>
        <Timeline>
            {
                experiences.map((experience, index) => (
                    <Timeline.Item color="green" key={index}>
                        <b>
                            {experience.title}
                        </b>
                        - {experience.company.name}
                        {' '}
                        <sup>
                            <i>
                                {format(experience.startedAt, 'MMM YYYY')}
                                {' - '}
                                {experience.endAt ? format(experience.endAt, 'MMM YYYY') : 'current'}
                            </i>
                        </sup>
                    </Timeline.Item>
                ))
            }
        </Timeline>
    </Fragment>
);
