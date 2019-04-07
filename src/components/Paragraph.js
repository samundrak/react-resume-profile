import React from 'react';
import styled from 'styled-components';

const StyleContent = styled.div`
  font-size: 1.2em;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  color: #1c1e21;
`;
const Paragraph = ({ content }) => <StyleContent dangerouslySetInnerHTML={{ __html: content }} />;
export default Paragraph;
