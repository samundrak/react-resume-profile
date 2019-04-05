import React, { Fragment } from 'react';
import { SocialIcon } from 'react-social-icons';
import { Card } from 'antd';
import { getFullURLfromUsername } from '../utils';

const { Meta } = Card;

const SocialIcons = ({ social }) => (
  <div>
    {' '}
    <Card actions={Object.keys(social).map(item => getFullURLfromUsername(item, social[item]))}>
      <Meta title="Find me socially" />
    </Card>
  </div>
);
export default SocialIcons;
