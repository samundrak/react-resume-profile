import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  border-bottom-radius: 1px;
  border-bottom-right-radius: 2%;
  border-bottom-left-radius: 2%;
  border-color: #e25252;
`;
const StyledTitle = styled.div`
  font-style: italic;
  font-weight: bold;
  width: 100%;
  text-align: center;
  font-size: 1.2em;
`;
const WidgetContainer = ({ title, children, style }) => (
  <ProjectContainer>
    <StyledTitle>{title}</StyledTitle>
    <div style={style}>{children}</div>
  </ProjectContainer>
);

export default WidgetContainer;
