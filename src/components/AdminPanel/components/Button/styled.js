import styled from "styled-components";

const Button = styled.button`
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
`;

const StyledButton = { Button };

export default StyledButton;
