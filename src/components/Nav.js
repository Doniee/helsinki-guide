import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 5px;
`;

const LinkWrapper = styled.div`
  list-style: none;
  padding: 0;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  max-width: 800px;
  flex: 1;
  margin: 20px 0;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s;
  color: ${props => props.theme.turquoise};

  &.active-link {
    background: ${props => props.theme.turquoise};
    color: #fff;
  }

  &:hover {
    border-radius: 30px;
  }

  padding: 10px;
  border: 2px solid ${props => props.theme.turquoise};
  flex: 1;

  &:nth-child(1) {
    margin-right: 5px;
  }

  &:nth-child(2) {
    margin-left: 5px;
  }
`;

export default class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <LinkWrapper>
          <StyledLink exact to="/" activeClassName="active-link">
            Where to go
          </StyledLink>
          <StyledLink to="/useful-information" activeClassName="active-link">
            Useful information
          </StyledLink>
        </LinkWrapper>
      </NavContainer>
    );
  }
}
