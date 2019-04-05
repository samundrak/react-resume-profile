import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Card } from 'antd';
import styled from 'styled-components';
import { getFullURLfromUsername } from '../utils';

const Container = styled.div`
  display: flex;
`;
const Item = styled.div`
  padding: 1%;
  flex: 1;
`;
const SocialIcons = ({ social }) => (
  <Container>
    {Object.keys(social).map(item => (
      <Item>
        <SocialIcon url={getFullURLfromUsername(item, social[item].username)} />
      </Item>
    ))}
  </Container>
);
export default SocialIcons;
