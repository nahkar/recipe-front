import styled from 'styled-components';

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

export default {
  BtnSubmit,
};
