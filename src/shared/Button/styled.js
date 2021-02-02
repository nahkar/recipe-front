import styled from 'styled-components';

import { Link } from 'react-router-dom';

import theme from './theme';

const BtnSubmit = styled.button`
  font-size: calc(5px + 2vmin);
  font-weight: bold;
  color: ${theme.primaryColor};
  background-color: ${theme.secondColor};
  cursor: pointer;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  outline: none;
  margin-bottom: 10px;
`;

// Button Create
const BtnCreate = styled(Link)`
  min-width: 100px;
  margin-bottom: 5px;
  background-color: ${(props) => props.color};
  color: #ffffff;
  border: none;
  padding: 5px 15px;
  margin-left: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
  :active {
    box-shadow: inset 0 0 3px #000000;
  }
  :hover {
    opacity: 0.7;
  }
`

const ButtonLog = {
  BtnSubmit,
  BtnCreate
};

export default ButtonLog;
