import React, { Fragment } from 'react';
import { Icon } from 'antd';

export default ({ type, info }) => (
    <Fragment>
        <Icon type={type} />
        {' '}
        <b>{info}</b>
    </Fragment>
);