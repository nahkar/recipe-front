import styled from "styled-components";

const AddBtn = styled.button`
  width: 100px;
  margin-bottom: 5px;
  background-color: #24d133;
  color: #ffffff;
  border: none;
  padding: 5px 15px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
  :active {
    box-shadow: inset 0 0 3px #000000;
  }
  :hover {
    background-color: #25b531;
  }
`;

export default AddBtn;
