import styled from 'styled-components';

import theme from './theme';

// const Button = styled.div`
//   background-color: ${theme.primaryColor};
//   color: ${theme.secondColor};
// `;

const Link = styled.a`
  text-decoration: none;
  font-weight: 500;
  position: relative;
  color: #4a4a4a;
  display: inline-block;
`;

const Button = styled.div`
  padding: 1em 3em;
  border: 3px solid ${theme.primaryColor};
  transition: all 300ms ease;
  box-shadow: 0px 4px 10px 2px rgba(black, 0.2);
  &:before {
    position: absolute;
    content: '';
    width: 0%;
    height: 50%;
    background: ${theme.primaryColor};
    top: 0;
    left: auto;
    right: 0;
    z-index: -1;
    transition: all 300ms ease;
  }
  &:hover {
    color: white;
    box-shadow: none;
    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 50%;
      background: ${theme.primaryColor};
      top: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }
  }
`;

export default {
  Button,
  Link,
};
