import styled from "styled-components";

const Input = styled.input`
  margin-left: ${(props) => props.margin};
  border-color: ${(props) => (props.isError ? "red" : "blue")};
  outline-color: ${(props) => (props.isError ? "red" : "blue")};
  box-sizing: border-box;
  display: block;
  width: 380px;
  padding: 7px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export default Input;
