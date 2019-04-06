import React from 'react';
import styled from 'styled-components';

const StyleContent = styled.div``;
const Paragraph = ({ content }) => (
  <StyleContent>
    <p dangerouslySetInnerHTML={{ __html: content }} />
  </StyleContent>
);
export default Paragraph;
