import React from 'react';
import { SocialIcon } from 'react-social-icons';
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
    {Object.keys(social).map((item, index) => (
      <Item key={index}>
        <SocialIcon url={getFullURLfromUsername(item, social[item].username)} />
      </Item>
    ))}
  </Container>
);
export default SocialIcons;
