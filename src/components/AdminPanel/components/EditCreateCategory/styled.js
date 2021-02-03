import styled from "styled-components";
const Wrapper = styled.div`
  padding: 10px;
`;
const NameInput = styled.label``;

const Input = styled.input`
  margin-left: 30px;
  border-color: ${(props) => (props.isError ? "red" : "blue")};
  outline-color: ${(props) => (props.isError ? "red" : "blue")};
`;
const WrapperBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 5px;
`;
const WarningMessage = styled.p`
  color: #ff0000;
`;
const CreateCategoryStyled = {
  NameInput,
  Input,
  Wrapper,
  WrapperBtn,
  WarningMessage,
};

export default CreateCategoryStyled;
