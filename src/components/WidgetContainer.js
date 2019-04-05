import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  border-style: solid;
  border-bottom-radius: 1px;
  border-bottom-right-radius: 2%;
  border-bottom-left-radius: 2%;
  border-color: #e25252;
`;
const StyledTitle = styled.div`
  font-style: italic;
  font-weight: bold;
  color: white;
  width: 100%;
  background-color: #e25252;
  text-align: center;
  font-size: 1.2em;
`;
const WidgetContainer = ({ title, children }) => (
  <ProjectContainer>
    <StyledTitle>{title}</StyledTitle>
    <div>{children}</div>
  </ProjectContainer>
);

export default WidgetContainer;
