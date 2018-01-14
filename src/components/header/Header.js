import React, { Component } from 'react';
import styled from 'styled-components';
import heroImage from './P1010408.jpg';

const Header = styled.header`
  background-color: ${props => props.theme.turquoise};
  padding: 20px;
  color: #fff;
  height: 300px;
  background: url(${heroImage}) no-repeat center 40%;
  background-size: cover;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h1`
  font-family: 'Amatic SC', cursive;
  font-size: 2.5em;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 1;
  margin-top: 90px;
`;

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Title>Couchsurfer's guide to Helsinki</Title>
      </Header>
    );
  }
}
