import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.turquoise};
  grid-row-start: 5;
  grid-row-end: 6;
  margin-top: 80px;
`;

export default () => <Footer />;
