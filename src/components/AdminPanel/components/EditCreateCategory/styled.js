import styled from "styled-components";
const Wrapper = styled.div`
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px black;
`;
const NameInput = styled.label``;

const Input = styled.input`
  margin-left: 30px;
`;
const WrapperBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 5px;
`;
const CreateCategoryStyled = {
  NameInput,
  Input,
  Wrapper,
  WrapperBtn,
};

export default CreateCategoryStyled;
