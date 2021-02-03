import styled from "styled-components";

const Input = styled.input`
  margin-left: ${(props) => props.margin};
  border-color: ${(props) => (props.isError ? "red" : "blue")};
  outline-color: ${(props) => (props.isError ? "red" : "blue")};
`;

export default Input;
