import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Card } from 'antd';
import { getFullURLfromUsername } from '../utils';
import WidgetContainer from './WidgetContainer';

const { Meta } = Card;

const SocialIcons = ({ social }) => (
  <WidgetContainer title="Coding,Ranting and Sharing here">
    {' '}
    <Card
      actions={Object.keys(social).map(item => (
        <SocialIcon url={getFullURLfromUsername(item, social[item].username)} />
      ))}
    />
  </WidgetContainer>
);
export default SocialIcons;
